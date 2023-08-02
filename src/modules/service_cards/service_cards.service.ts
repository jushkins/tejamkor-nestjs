import { HttpException, Injectable } from '@nestjs/common';
import { CreateServiceCardDto } from './dto/create-service_card.dto';
import { UpdateServiceCardDto } from './dto/update-service_card.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceCard } from './entities/service_card.entity';

@Injectable()
export class ServiceCardsService {
  constructor(
    @InjectRepository(ServiceCard)
    private serviceCardRepository: Repository<ServiceCard>,
  ) {}
  async create(dto: CreateServiceCardDto) {
    const addServiceCard = await this.serviceCardRepository.create(dto);
    await this.serviceCardRepository.save(addServiceCard);
    return addServiceCard;
  }

  async findAll() {
    const allCardsInfo = await this.serviceCardRepository.find();
    return allCardsInfo;
  }

  async findOneById(id: number) {
    const cards = await this.serviceCardRepository.findOneBy({ id });
    if (!cards) {
      throw new HttpException('Cards info not found', 404);
    }
    return cards;
  }

  async updateById(id: number, dto: UpdateServiceCardDto) {
    const cardInfoUpdate = await this.serviceCardRepository.findOneBy({ id });
    if (!cardInfoUpdate) {
      throw new HttpException('Info not found', 404);
    }
    Object.assign(cardInfoUpdate, dto);
    await this.serviceCardRepository.save(cardInfoUpdate);
    return cardInfoUpdate;
  }

  async removeById(id: number) {
    const infoToRemove = await this.serviceCardRepository.findOneBy({ id });
    if (!infoToRemove) {
      throw new HttpException('Info not found', 404);
    }
    await this.serviceCardRepository.remove(infoToRemove);
    return { message: 'Info is deleted' };
  }
}
