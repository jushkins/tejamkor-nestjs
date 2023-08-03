import { Injectable, HttpException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async login(dto: CreateAdminDto) {
    const admin = await this.adminRepository.findOneBy({
      email: dto.email,
    });

    if (!admin) {
      throw new HttpException('Wrong email', 404);
    }

    if (admin.password !== dto.password) {
      throw new HttpException('Wrong password', 401);
    }
    return this.signToken(admin.id, admin.email);
  }
  async signToken(
    id: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: id,
      email,
    };
    const secret = this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '24h',
      secret: secret,
    });
    return {
      access_token: token,
    };
  }
}
