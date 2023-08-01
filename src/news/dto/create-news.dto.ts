import { IsDate, IsOptional, IsString } from 'class-validator';

export class CreateNewsDto {
  @IsString()
  @IsOptional()
  image: string;

  @IsDate()
  @IsOptional()
  date: Date;

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
}
