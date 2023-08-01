import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateServiceCardDto {
  @IsString()
  @IsOptional()
  title_uz: string;

  @IsString()
  @IsOptional()
  title_ru: string;

  @IsString()
  @IsOptional()
  title_en: string;

  @IsString()
  @IsOptional()
  description_uz: string;

  @IsString()
  @IsOptional()
  description_ru: string;

  @IsString()
  @IsOptional()
  description_en: string;

  @IsString()
  @IsOptional()
  image: string;

  @IsNumber()
  @IsOptional()
  order: number;
}
