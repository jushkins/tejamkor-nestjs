import { Injectable, HttpException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {}
  async login(dto: CreateAdminDto) {
    const admin = await this.adminRepository.findOneBy({
      email: dto.email,
    });

    if (!admin) {
      throw new HttpException('Admin not found', 404);
    }

    if (admin.password !== dto.password) {
      throw new HttpException('Wrong password', 401);
    }

    return admin;
  }
}
