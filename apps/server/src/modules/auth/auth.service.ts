import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthResponse } from './dto/auth-response.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { CreateUserResponse } from '../users/dto/create-response.dto';

@Injectable()
export class AuthService {

    constructor(
        private readonly prismaService: PrismaService, 
        private jwtService: JwtService, 
        private readonly usersService: UsersService
    ) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.prismaService.user.findUnique({
            where: { username}
        });

        if(!user) {
            return null;
        }

        const validatePassword = await bcrypt.compare(password, user.password);

        if (!validatePassword) {
            return null;
        }
        const { password: string, ...result } = user;
        return result;
        
      }

    async login(user: any): Promise<AuthResponse> {
        const payload = {username: user.username};
        return {access_token: this.jwtService.sign(payload)
        }
    }

    async register(createUserDto: CreateUserDto): Promise<CreateUserResponse> {
        const user = await this.usersService.createUser(createUserDto);
        return {user: user}
    }
}