import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class CreateAboutDto {
  @ApiProperty()
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
  video_img: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  video: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  logo: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  address: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsPhoneNumber('UZ')
  phone_number: string;
}
