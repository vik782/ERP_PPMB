import { Controller, Post, Body, UseGuards, Get, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';
import { Request } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserResponse } from './dto/create-response.dto';
import { userProfile } from './dto/get-profile.dto';
import { User } from '@prisma/client';
import { RolesGuard } from '../auth/role/role.guard';
import { Role } from '../auth/role/role.enum';
import { Roles } from '../auth/role/role.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  register(@Body() createUserDto: CreateUserDto): Promise<CreateUserResponse> {
    return this.usersService.createUser(createUserDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Marketing)
  @Get('/profile')
  getProfile(@Req() req: Request): Promise<userProfile> {
    const user = req.user;
    return this.usersService.getProfile(user as User);
  }
}
