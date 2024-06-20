import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtStrategy } from '../auth/jwt.strategy';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, JwtStrategy],
  exports: [UsersService]
})
export class UsersModule {}
