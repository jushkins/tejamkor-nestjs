import { IsPhoneNumber, IsString } from 'class-validator';

export class CreateAboutDto {
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
  video_img: string;

  @IsString()
  video: string;

  @IsString()
  logo: string;

  @IsString()
  address: string;

  @IsString()
  @IsPhoneNumber('UZ')
  phone_number: string;
}
