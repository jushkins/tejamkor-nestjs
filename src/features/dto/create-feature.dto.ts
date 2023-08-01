import { IsString } from 'class-validator';

export class CreateFeatureDto {
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

  @IsString()
  image: string;

  @IsString()
  feature_card_title_uz: string;

  @IsString()
  feature_card_title_ru: string;

  @IsString()
  feature_card_title_en: string;

  @IsString()
  feature_card_svg1: string;

  @IsString()
  feature_card_svg2: string;

  @IsString()
  feature_card_svg3: string;
}
