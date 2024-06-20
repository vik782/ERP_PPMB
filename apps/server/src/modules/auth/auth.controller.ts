import { Controller, Post, UseGuards, Body, Req, Get} from '@nestjs/common';
import { AuthResponse } from './dto/auth-response.dto';
import { CreateUserResponse } from '../users/dto/create-response.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Request } from 'express';
import { JwtAuthGuard } from './jwt-auth.guard';


@Controller('auth')
export class AuthController {

    constructor(private readonly authService:AuthService) { } 

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Req() req: Request): Promise<AuthResponse> {
        return this.authService.login(req.user);
    }

    @Post('register')
    register(@Body() createUserDto:CreateUserDto): Promise<CreateUserResponse> {
        return this.authService.register(createUserDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Req() req: Request) {
        return req.user
    }
    

}