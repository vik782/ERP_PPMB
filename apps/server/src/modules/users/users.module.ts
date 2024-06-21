import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';
import { JwtStrategy } from '../auth/jwt/jwt.strategy';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, JwtStrategy, JwtAuthGuard],
  exports: [UsersService],
})
export class UsersModule {}
