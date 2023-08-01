import { IsNumber, IsString } from 'class-validator';

export class CreateSocialNetworkDto {
  @IsString()
  name: string;

  @IsString()
  link: string;

  @IsString()
  svg: string;

  @IsNumber()
  order: number;
}
