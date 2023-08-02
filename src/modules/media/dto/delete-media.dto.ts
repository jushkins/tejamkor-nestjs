import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class DeleteMediaDto {
  @ApiProperty({ type: 'Url array of the pictures', example: ['url'] })
  @IsDefined()
  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  arrayOfUrl: string[];
}
