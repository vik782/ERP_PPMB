import { PassportStrategy } from '@nestjs/passport';
import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from '../auth.service';
import { Strategy } from 'passport-local';
import { LoginUserDto } from '../dto/login-user.dto';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private moduleRef: ModuleRef) {
    super({
      passReqToCallback: true,
    });
  }

  async validate(request: Request, username: string, password: string): Promise<any> {
    const contextId = ContextIdFactory.getByRequest(request);
    const authService = await this.moduleRef.resolve(AuthService, contextId);
    const loginUserDto = {username, password}
    const user = await authService.validateUser(loginUserDto as LoginUserDto);

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
