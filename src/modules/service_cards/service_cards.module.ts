import { Module } from '@nestjs/common';
import { ServiceCardsService } from './service_cards.service';
import { ServiceCardsController } from './service_cards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceCard } from './entities/service_card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceCard])],
  controllers: [ServiceCardsController],
  providers: [ServiceCardsService],
})
export class ServiceCardsModule {}
