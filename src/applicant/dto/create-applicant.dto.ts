import { IsNumber, IsPhoneNumber, IsString } from 'class-validator';

export class CreateApplicantDto {
  @IsString()
  full_name: string;

  @IsString()
  @IsPhoneNumber('UZ')
  phone_number: string;
}
