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
    const maxOrder = await this.serviceCardRepository.maximum('order');

    const newServiceCard = this.serviceCardRepository.create({
      ...dto,
      order: maxOrder + 1,
    });

    await this.serviceCardRepository.save(newServiceCard);

    return newServiceCard;
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
    const cardUpdate = await this.serviceCardRepository.findOneBy({ id });

    if (!cardUpdate) {
      throw new HttpException('Info not found', 404);
    }

    const oldOrder = cardUpdate.order;

    if (oldOrder !== dto.order) {
      const allCards = await this.serviceCardRepository.find();

      const cardToUpdate = allCards.filter((menu) => {
        if (oldOrder < dto.order) {
          return menu.order > oldOrder && menu.order <= dto.order;
        } else {
          return menu.order >= dto.order && menu.order < oldOrder;
        }
      });

      for (const menu of cardToUpdate) {
        if (oldOrder < dto.order) {
          menu.order -= 1;
        } else {
          menu.order += 1;
        }
        await this.serviceCardRepository.save(menu);
      }

      cardUpdate.order = dto.order;
    }

    await this.serviceCardRepository.save(cardUpdate);

    return cardUpdate;
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
