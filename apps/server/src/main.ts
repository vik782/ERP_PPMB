import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Server } from 'http';

let server: Server;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  await app.init();
  const expressApp = app.getHttpAdapter().getInstance();
  server = new Server(expressApp);
}

export const handler = async (req: any, res: any) => {
  if (!server) {
    await bootstrap();
  }
  server.emit('request', req, res);
};
