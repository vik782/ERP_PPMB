import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthResponse } from './dto/auth-response.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private jwtService: JwtService
  ) {}

  async validateUser(loginUserDto: LoginUserDto): Promise<any> {
    const {username, password} = loginUserDto
    const user = await this.prismaService.user.findUnique({
      where: { username},
    });

    if (!user) {
      throw new NotFoundException();
    }

    const validatePassword = await bcrypt.compare(password, user.password);

    if (!validatePassword) {
      throw new UnauthorizedException();
    }
    const { password: string, ...res } = user;
    return res;
  }

  async login(user: any): Promise<AuthResponse> {
    const payload = { username: user.username };
    const { password: string, ...res } = user as User;
    return { user: user, access_token: this.jwtService.sign(payload) };
  }
}
