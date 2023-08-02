import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ServiceCardsService } from './service_cards.service';
import { CreateServiceCardDto } from './dto/create-service_card.dto';
import { UpdateServiceCardDto } from './dto/update-service_card.dto';

@Controller('service-cards')
export class ServiceCardsController {
  constructor(private readonly serviceCardsService: ServiceCardsService) {}

  @Post()
  create(@Body() createServiceCardDto: CreateServiceCardDto) {
    return this.serviceCardsService.create(createServiceCardDto);
  }

  @Get()
  findAll() {
    return this.serviceCardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.serviceCardsService.findOneById(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateServiceCardDto: UpdateServiceCardDto,
  ) {
    return this.serviceCardsService.updateById(+id, updateServiceCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.serviceCardsService.removeById(+id);
  }
}
