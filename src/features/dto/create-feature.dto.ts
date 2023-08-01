import { IsOptional, IsString } from 'class-validator';

export class CreateFeatureDto {
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

  @IsString()
  @IsOptional()
  feature_card_title_uz: string;

  @IsString()
  @IsOptional()
  feature_card_title_ru: string;

  @IsString()
  @IsOptional()
  feature_card_title_en: string;

  @IsString()
  @IsOptional()
  feature_card_svg1: string;

  @IsString()
  @IsOptional()
  feature_card_svg2: string;

  @IsString()
  @IsOptional()
  feature_card_svg3: string;
}
