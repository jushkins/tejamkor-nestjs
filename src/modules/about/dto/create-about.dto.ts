import { IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class CreateAboutDto {
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
  video_img: string;

  @IsString()
  @IsOptional()
  video: string;

  @IsString()
  @IsOptional()
  logo: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  @IsOptional()
  @IsPhoneNumber('UZ')
  phone_number: string;
}
