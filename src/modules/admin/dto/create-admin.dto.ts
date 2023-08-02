import { IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  password: string;
}
