import { HttpException, Injectable } from '@nestjs/common';
import { CreateFeatureDto } from './dto/create-feature.dto';
import { UpdateFeatureDto } from './dto/update-feature.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Feature } from './entities/feature.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FeaturesService {
  constructor(
    @InjectRepository(Feature) private featureRepository: Repository<Feature>,
  ) {}
  async create(dto: CreateFeatureDto) {
    const newFeature = await this.featureRepository.create(dto);
    await this.featureRepository.save(newFeature);
    return newFeature;
  }

  async findAll() {
    const allFeature = await this.featureRepository.find();
    return allFeature;
  }

  async findOneById(id: number) {
    const feature = await this.featureRepository.findOneBy({ id });
    if (!feature) {
      throw new HttpException('Feature info not found', 404);
    }
    return feature;
  }

  async updateById(id: number, dto: UpdateFeatureDto) {
    const featureUpdate = await this.featureRepository.findOneBy({ id });
    if (!featureUpdate) {
      throw new HttpException('Info not found', 404);
    }
    Object.assign(featureUpdate, dto);
    await this.featureRepository.save(featureUpdate);
    return featureUpdate;
  }

  async removeById(id: number) {
    const featureToRemove = await this.featureRepository.findOneBy({ id });
    if (!featureToRemove) {
      throw new HttpException('Info not found', 404);
    }
    await this.featureRepository.remove(featureToRemove);
    return { message: 'Info is deleted' };
  }
}
