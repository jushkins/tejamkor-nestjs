import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateStatisticDto {
  @ApiProperty({ example: 100 })
  @IsNumber()
  @IsOptional()
  count: number;

  @ApiProperty({ example: 'Foydalanuvchilar' })
  @IsString()
  @IsOptional()
  title_uz: string;

  @ApiProperty({ example: 'Пользователи' })
  @IsString()
  @IsOptional()
  title_ru: string;

  @ApiProperty({ example: 'Users' })
  @IsString()
  @IsOptional()
  title_en: string;
}
