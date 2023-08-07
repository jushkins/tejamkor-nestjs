import { HttpException, Injectable } from '@nestjs/common';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { About } from './entities/about.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AboutService {
  constructor(
    @InjectRepository(About) private aboutRepository: Repository<About>,
  ) {}
  async create(dto: CreateAboutDto) {
    const newInfo = this.aboutRepository.create(dto);
    await this.aboutRepository.save(newInfo);
    return newInfo;
  }

  async findAll() {
    const allInfo = await this.aboutRepository.find();
    return allInfo;
  }

  async findOneById(id: number) {
    const info = await this.aboutRepository.findOneBy({ id });
    if (!info) {
      throw new HttpException('Info not found', 404);
    }
    return info;
  }

  async updateById(id: number, dto: UpdateAboutDto) {
    const newInfo = await this.aboutRepository.findOneBy({ id });
    if (!newInfo) {
      throw new HttpException('Info not found', 404);
    }
    Object.assign(newInfo, dto);
    await this.aboutRepository.save(newInfo);
    return newInfo;
  }

  async removeById(id: number) {
    const infoToremove = await this.aboutRepository.findOneBy({ id });
    if (!infoToremove) {
      throw new HttpException('Info not found', 404);
    }
    await this.aboutRepository.remove(infoToremove);
    return { message: 'Info is deleted' };
  }
}
