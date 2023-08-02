import { HttpException, Injectable } from '@nestjs/common';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Banner } from './entities/banner.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BannerService {
  constructor(
    @InjectRepository(Banner) private bannerRepository: Repository<Banner>,
  ) {}
  async create(dto: CreateBannerDto) {
    const newBanner = await this.bannerRepository.create(dto);
    await this.bannerRepository.save(newBanner);
    return newBanner;
  }

  async findAll() {
    const allBanner = await this.bannerRepository.find();
    return allBanner;
  }

  async findOneById(id: number) {
    const banner = await this.bannerRepository.findOneBy({ id });
    if (!banner) {
      throw new HttpException('Banner not found', 404);
    }
    return banner;
  }

  async updateById(id: number, dto: UpdateBannerDto) {
    const bannerUpdate = await this.bannerRepository.findOneBy({ id });
    if (!bannerUpdate) {
      throw new HttpException('Banner not found', 404);
    }
    Object.assign(bannerUpdate, dto);
    await this.bannerRepository.save(bannerUpdate);
    return bannerUpdate;
  }

  async removeById(id: number) {
    const bannerToRemove = await this.bannerRepository.findOneBy({ id });
    if (!bannerToRemove) {
      throw new HttpException('Banner not found', 404);
    }
    await this.bannerRepository.remove(bannerToRemove);
    return { message: 'banner is deleted' };
  }
}
