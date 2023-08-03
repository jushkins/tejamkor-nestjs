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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('STATISTICS')
@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Post()
  @ApiOperation({ summary: 'Create statistics info' })
  create(@Body() createStatisticDto: CreateStatisticDto) {
    return this.statisticsService.create(createStatisticDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all statistics info' })
  findAll() {
    return this.statisticsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get statistics info by ID' })
  findOne(@Param('id') id: number) {
    return this.statisticsService.findOneById(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update statistics info by ID' })
  update(
    @Param('id') id: number,
    @Body() updateStatisticDto: UpdateStatisticDto,
  ) {
    return this.statisticsService.updateById(+id, updateStatisticDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete statistics info by ID' })
  remove(@Param('id') id: number) {
    return this.statisticsService.removeById(+id);
  }
}
