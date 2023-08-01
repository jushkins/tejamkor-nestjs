import { Injectable } from '@nestjs/common';
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
    const info = await this.aboutRepository.find();
    return info;
  }

  findOne(id: number) {
    return `This action returns a #${id} about`;
  }

  update(id: number, updateAboutDto: UpdateAboutDto) {
    return `This action updates a #${id} about`;
  }

  remove(id: number) {
    return `This action removes a #${id} about`;
  }
}
