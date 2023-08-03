import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateFeatureDto {
  @ApiProperty({ example: 'Hello nigga' })
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
  @IsString()
  @IsOptional()
  feature_card_title_uz: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  feature_card_title_ru: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  feature_card_title_en: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  feature_card_svg1: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  feature_card_svg2: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  feature_card_svg3: string;
}
