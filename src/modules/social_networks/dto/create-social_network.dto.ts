import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSocialNetworkDto {
  @ApiProperty({ example: 'Instagram' })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({ example: 'https://www.instagram.com/jushkin.me/' })
  @IsString()
  @IsOptional()
  link: string;

  @ApiProperty({ example: 'blalalalala' })
  @IsString()
  @IsOptional()
  svg: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsOptional()
  order: number;
}
