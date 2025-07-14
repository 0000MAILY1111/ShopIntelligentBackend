import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  //configuracion de cors 
    app.enableCors({
    origin: true, 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, 
  });

  app.useGlobalPipes (new ValidationPipe({
    whitelist: true, 
  }));
  app.useStaticAssets(join(__dirname, '../public'))
  await app.listen(3000);
  ///ultimo config >nextfrontend part1

  /**
   * 
   * 
   * 
   * 
   * // Para producción con más control
app.enableCors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://tu-dominio.com'] 
    : ['http://localhost:3001', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true,
});
   * / */
}
bootstrap();

