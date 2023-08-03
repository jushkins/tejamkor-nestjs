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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('SOCIAL NETWORKS')
@Controller('social-networks')
export class SocialNetworksController {
  constructor(private readonly socialNetworksService: SocialNetworksService) {}

  @Post()
  @ApiOperation({ summary: 'Create new social network info' })
  create(@Body() createSocialNetworkDto: CreateSocialNetworkDto) {
    return this.socialNetworksService.create(createSocialNetworkDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all social network info' })
  findAll() {
    return this.socialNetworksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get social network info by ID' })
  findOne(@Param('id') id: number) {
    return this.socialNetworksService.findOneById(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update social network info by ID' })
  update(
    @Param('id') id: number,
    @Body() updateSocialNetworkDto: UpdateSocialNetworkDto,
  ) {
    return this.socialNetworksService.updateById(+id, updateSocialNetworkDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete social network info by ID' })
  remove(@Param('id') id: number) {
    return this.socialNetworksService.removeById(+id);
  }
}
