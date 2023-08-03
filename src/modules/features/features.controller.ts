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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('FEATURES')
@Controller('features')
export class FeaturesController {
  constructor(private readonly featuresService: FeaturesService) {}

  @Post()
  @ApiOperation({ summary: 'Create feature' })
  create(@Body() createFeatureDto: CreateFeatureDto) {
    return this.featuresService.create(createFeatureDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get feature' })
  findAll() {
    return this.featuresService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get feature by ID' })
  findOne(@Param('id') id: number) {
    return this.featuresService.findOneById(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update feature by ID' })
  update(@Param('id') id: number, @Body() updateFeatureDto: UpdateFeatureDto) {
    return this.featuresService.updateById(+id, updateFeatureDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete feature by ID' })
  remove(@Param('id') id: number) {
    return this.featuresService.removeById(+id);
  }
}
