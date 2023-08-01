import { Module } from '@nestjs/common';
import { ServiceCardsService } from './service_cards.service';
import { ServiceCardsController } from './service_cards.controller';

@Module({
  controllers: [ServiceCardsController],
  providers: [ServiceCardsService]
})
export class ServiceCardsModule {}
