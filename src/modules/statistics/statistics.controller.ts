import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { CreateStatisticDto } from './dto/create-statistic.dto';
import { UpdateStatisticDto } from './dto/update-statistic.dto';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Post()
  create(@Body() createStatisticDto: CreateStatisticDto) {
    return this.statisticsService.create(createStatisticDto);
  }

  @Get()
  findAll() {
    return this.statisticsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.statisticsService.findOneById(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateStatisticDto: UpdateStatisticDto,
  ) {
    return this.statisticsService.updateById(+id, updateStatisticDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.statisticsService.removeById(+id);
  }
}
