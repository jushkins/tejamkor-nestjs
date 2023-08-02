import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FeaturesService } from './features.service';
import { CreateFeatureDto } from './dto/create-feature.dto';
import { UpdateFeatureDto } from './dto/update-feature.dto';

@Controller('features')
export class FeaturesController {
  constructor(private readonly featuresService: FeaturesService) {}

  @Post()
  create(@Body() createFeatureDto: CreateFeatureDto) {
    return this.featuresService.create(createFeatureDto);
  }

  @Get()
  findAll() {
    return this.featuresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.featuresService.findOneById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateFeatureDto: UpdateFeatureDto) {
    return this.featuresService.updateById(+id, updateFeatureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.featuresService.removeById(+id);
  }
}
