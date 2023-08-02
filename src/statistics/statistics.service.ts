import { HttpException, Injectable } from '@nestjs/common';
import { CreateStatisticDto } from './dto/create-statistic.dto';
import { UpdateStatisticDto } from './dto/update-statistic.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Statistic } from './entities/statistic.entity';

@Injectable()
export class StatisticsService {
  constructor(
    @InjectRepository(Statistic)
    private statisticsRepository: Repository<Statistic>,
  ) {}
  async create(dto: CreateStatisticDto) {
    const addStatistics = await this.statisticsRepository.create(dto);
    await this.statisticsRepository.save(addStatistics);
    return addStatistics;
  }

  async findAll() {
    const allStatistics = await this.statisticsRepository.find();
    return allStatistics;
  }

  async findOneById(id: number) {
    const statistics = await this.statisticsRepository.findOneBy({ id });
    if (!statistics) {
      throw new HttpException('Statistics info not found', 404);
    }
    return statistics;
  }

  async updateById(id: number, dto: UpdateStatisticDto) {
    const update = await this.statisticsRepository.findOneBy({
      id,
    });
    if (!update) {
      throw new HttpException('Info not found', 404);
    }
    Object.assign(update, dto);
    await this.statisticsRepository.save(update);
    return update;
  }

  async removeById(id: number) {
    const infoToRemove = await this.statisticsRepository.findOneBy({ id });
    if (!infoToRemove) {
      throw new HttpException('Info not found', 404);
    }
    await this.statisticsRepository.remove(infoToRemove);
    return { message: 'Info is deleted' };
  }
}
