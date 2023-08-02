import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateStatisticDto {
  @IsNumber()
  @IsOptional()
  count: number;

  @IsString()
  @IsOptional()
  title_uz: string;

  @IsString()
  @IsOptional()
  title_ru: string;

  @IsString()
  @IsOptional()
  title_en: string;
}
