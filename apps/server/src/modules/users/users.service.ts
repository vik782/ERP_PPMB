import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserResponse } from './dto/create-response.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async getProfile(user: User): Promise<User> {
    delete user.password;
    return user;
  }

  async createUser(createUserDto: CreateUserDto): Promise<CreateUserResponse> {
    const existing = await this.prismaService.user.findUnique({
      where: { username: createUserDto.username },
    });

    if (existing) {
      throw new ConflictException('Email already exists');
    }

    const salt = Number(process.env.BCRYPT_SALT);
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

    const user = await this.prismaService.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });

    delete user.password;
    return { user: user };
  }
}
