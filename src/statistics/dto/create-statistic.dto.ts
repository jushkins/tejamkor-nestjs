import { IsNumber, IsString } from 'class-validator';

export class CreateStatisticDto {
  @IsNumber()
  count: number;

  @IsString()
  title_uz: string;

  @IsString()
  title_ru: string;

  @IsString()
  title_en: string;
}
