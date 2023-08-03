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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('SERVICE CARDS')
@Controller('service-cards')
export class ServiceCardsController {
  constructor(private readonly serviceCardsService: ServiceCardsService) {}

  @Post()
  @ApiOperation({ summary: 'Create news card info' })
  create(@Body() createServiceCardDto: CreateServiceCardDto) {
    return this.serviceCardsService.create(createServiceCardDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all news card info' })
  findAll() {
    return this.serviceCardsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get news card info by ID' })
  findOne(@Param('id') id: number) {
    return this.serviceCardsService.findOneById(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update news card info by ID' })
  update(
    @Param('id') id: number,
    @Body() updateServiceCardDto: UpdateServiceCardDto,
  ) {
    return this.serviceCardsService.updateById(+id, updateServiceCardDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete news card info by ID' })
  remove(@Param('id') id: number) {
    return this.serviceCardsService.removeById(+id);
  }
}
