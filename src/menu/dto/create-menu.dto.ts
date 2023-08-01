import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMenuDto {
  @IsString()
  @IsOptional()
  name_uz: string;

  @IsString()
  @IsOptional()
  name_ru: string;

  @IsString()
  @IsOptional()
  name_en: string;

  @IsNumber()
  @IsOptional()
  order: number;
}
