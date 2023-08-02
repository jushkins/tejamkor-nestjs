import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSocialNetworkDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  link: string;

  @IsString()
  @IsOptional()
  svg: string;

  @IsNumber()
  @IsOptional()
  order: number;
}
