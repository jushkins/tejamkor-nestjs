import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SocialNetworksService } from './social_networks.service';
import { CreateSocialNetworkDto } from './dto/create-social_network.dto';
import { UpdateSocialNetworkDto } from './dto/update-social_network.dto';

@Controller('social-networks')
export class SocialNetworksController {
  constructor(private readonly socialNetworksService: SocialNetworksService) {}

  @Post()
  create(@Body() createSocialNetworkDto: CreateSocialNetworkDto) {
    return this.socialNetworksService.create(createSocialNetworkDto);
  }

  @Get()
  findAll() {
    return this.socialNetworksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.socialNetworksService.findOneById(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateSocialNetworkDto: UpdateSocialNetworkDto,
  ) {
    return this.socialNetworksService.updateById(+id, updateSocialNetworkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.socialNetworksService.removeById(+id);
  }
}
