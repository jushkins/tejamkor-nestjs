import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBannerDto {
  @ApiProperty({ example: 'About Us' })
  @IsString()
  @IsOptional()
  title_uz: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  title_ru: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  title_en: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description_uz: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description_ru: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description_en: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  image: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  order: number;
}
