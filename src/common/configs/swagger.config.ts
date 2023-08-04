import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Tejamkor Uz')
  .setDescription('Tejamkor.uz API documentation')
  .setVersion('1.0')
  .addTag('ALL ENDPOINTS')
  .addBearerAuth({
    type: 'http',
    scheme: 'bearer',
    name: 'jwt',
    description: 'Here admin can login',
  })
  .build();
