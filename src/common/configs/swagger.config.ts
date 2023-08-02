import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Tejamkor Uz')
  .setDescription('Tejamkor.uz API documentation')
  .setVersion('1.0')
  .addTag('api')
  .build();
