import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AboutService } from './about.service';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Post()
  create(@Body() createAboutDto: CreateAboutDto) {
    return this.aboutService.create(createAboutDto);
  }

  @Get()
  findAll() {
    return this.aboutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.aboutService.findOneById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateAboutDto: UpdateAboutDto) {
    return this.aboutService.updateById(+id, updateAboutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.aboutService.removeById(+id);
  }
}
