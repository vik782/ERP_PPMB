import { Controller, Post, Body, UseGuards, Get, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {

    // constructor (private readonly usersService:UsersService) { }
    /*
    @UseGuards(AuthGuard('jwt'))
    @Get('/profile')
    getProfile(@Req() req: Request) {
        return req.user
    }
        */
    
}