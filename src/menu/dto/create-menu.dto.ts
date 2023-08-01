import { IsNumber, IsString } from 'class-validator';

export class CreateMenuDto {
  @IsString()
  name_uz: string;

  @IsString()
  name_ru: string;

  @IsString()
  name_en: string;

  @IsNumber()
  order: number;
}
