import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
dotenv.config();

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const s = process.env.PORT;
    console.log(s)
    return this.appService.getHello();
  }
}
