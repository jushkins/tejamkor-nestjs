import { HttpException, Injectable } from '@nestjs/common';
import { CreateSocialNetworkDto } from './dto/create-social_network.dto';
import { UpdateSocialNetworkDto } from './dto/update-social_network.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SocialNetwork } from './entities/social_network.entity';

@Injectable()
export class SocialNetworksService {
  constructor(
    @InjectRepository(SocialNetwork)
    private socialNetworksRepository: Repository<SocialNetwork>,
  ) {}
  async create(dto: CreateSocialNetworkDto) {
    const addSocialNetwork = await this.socialNetworksRepository.create(dto);
    await this.socialNetworksRepository.save(addSocialNetwork);
    return addSocialNetwork;
  }

  async findAll() {
    const allSocialNetworks = await this.socialNetworksRepository.find();
    return allSocialNetworks;
  }

  async findOneById(id: number) {
    const socialNetwork = await this.socialNetworksRepository.findOneBy({ id });
    if (!socialNetwork) {
      throw new HttpException('SocialNetwork info not found', 404);
    }
    return socialNetwork;
  }

  async updateById(id: number, dto: UpdateSocialNetworkDto) {
    const update = await this.socialNetworksRepository.findOneBy({
      id,
    });
    if (!update) {
      throw new HttpException('Info not found', 404);
    }
    Object.assign(update, dto);
    await this.socialNetworksRepository.save(update);
    return update;
  }

  async removeById(id: number) {
    const infoToRemove = await this.socialNetworksRepository.findOneBy({ id });
    if (!infoToRemove) {
      throw new HttpException('Info not found', 404);
    }
    await this.socialNetworksRepository.remove(infoToRemove);
    return { message: 'Info is deleted' };
  }
}
