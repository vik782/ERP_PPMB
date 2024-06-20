import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './modules/prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { AuthController } from './modules/auth/auth.controller';
import { UsersController } from './modules/users/users.controller';
import { AuthService } from './modules/auth/auth.service';
import { PrismaService } from './modules/prisma/prisma.service';
import { JwtStrategy } from './modules/auth/jwt/jwt.strategy';
import { LocalStrategy } from './modules/auth/passport/local.strategy';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, AuthModule, UsersModule],
  controllers: [AppController, AuthController, UsersController],
  providers: [
    AppService,
    PrismaService,
    AuthService,
    UsersController,
    JwtStrategy,
    LocalStrategy
  ],
})
export class AppModule {}
