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

@Controller('banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Post()
  create(@Body() createBannerDto: CreateBannerDto) {
    return this.bannerService.create(createBannerDto);
  }

  @Get()
  findAll() {
    return this.bannerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.bannerService.findOneById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateBannerDto: UpdateBannerDto) {
    return this.bannerService.updateById(+id, updateBannerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.bannerService.removeById(+id);
  }
}
