import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMenuDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  name_uz: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  name_ru: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  name_en: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  order: number;
}
