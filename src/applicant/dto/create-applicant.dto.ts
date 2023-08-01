import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class CreateApplicantDto {
  @IsNotEmpty()
  @IsString()
  full_name: string;

  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber('UZ')
  phone_number: string;
}
