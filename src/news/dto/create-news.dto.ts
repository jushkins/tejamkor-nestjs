import { IsDate, IsString } from 'class-validator';

export class CreateNewsDto {
  @IsString()
  image: string;

  @IsDate()
  date: Date;

  @IsString()
  title_uz: string;

  @IsString()
  title_ru: string;

  @IsString()
  title_en: string;

  @IsString()
  description_uz: string;

  @IsString()
  description_ru: string;

  @IsString()
  description_en: string;
}
