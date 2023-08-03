import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BannerService } from './banner.service';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('BANNER')
@Controller('banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Post()
  @ApiOperation({ summary: 'Create new update info' })
  create(@Body() createBannerDto: CreateBannerDto) {
    return this.bannerService.create(createBannerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all update info' })
  findAll() {
    return this.bannerService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get update info by ID' })
  findOne(@Param('id') id: number) {
    return this.bannerService.findOneById(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update info by ID' })
  update(@Param('id') id: number, @Body() updateBannerDto: UpdateBannerDto) {
    return this.bannerService.updateById(+id, updateBannerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete info by ID' })
  remove(@Param('id') id: number) {
    return this.bannerService.removeById(+id);
  }
}
