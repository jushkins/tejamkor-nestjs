import { HttpException, Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from './entities/news.entity';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News) private newsRepository: Repository<News>,
  ) {}
  async create(dto: CreateNewsDto) {
    const addNews = await this.newsRepository.create(dto);
    await this.newsRepository.save(addNews);
    return addNews;
  }

  async findAll() {
    const allNews = await this.newsRepository.find();
    return allNews;
  }

  async findOneById(id: number) {
    const news = await this.newsRepository.findOneBy({ id });
    if (!news) {
      throw new HttpException('News info not found', 404);
    }
    return news;
  }

  async updateById(id: number, dto: UpdateNewsDto) {
    const newsUpdate = await this.newsRepository.findOneBy({ id });
    if (!newsUpdate) {
      throw new HttpException('Info not found', 404);
    }
    Object.assign(newsUpdate, dto);
    await this.newsRepository.save(newsUpdate);
    return newsUpdate;
  }

  async removeById(id: number) {
    const newsToRemove = await this.newsRepository.findOneBy({ id });
    if (!newsToRemove) {
      throw new HttpException('Info not found', 404);
    }
    await this.newsRepository.remove(newsToRemove);
    return { message: 'Info is deleted' };
  }
}
