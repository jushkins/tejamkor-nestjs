import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('NEWS')
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  @ApiOperation({ summary: 'Create news info' })
  create(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.create(createNewsDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all news info' })
  findAll() {
    return this.newsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get news info by ID' })
  findOne(@Param('id') id: number) {
    return this.newsService.findOneById(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update news info by ID' })
  update(@Param('id') id: number, @Body() updateNewsDto: UpdateNewsDto) {
    return this.newsService.updateById(+id, updateNewsDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete news info by ID' })
  remove(@Param('id') id: number) {
    return this.newsService.removeById(+id);
  }
}
