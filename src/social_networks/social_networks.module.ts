import { Module } from '@nestjs/common';
import { SocialNetworksService } from './social_networks.service';
import { SocialNetworksController } from './social_networks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocialNetwork } from './entities/social_network.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SocialNetwork])],
  controllers: [SocialNetworksController],
  providers: [SocialNetworksService],
})
export class SocialNetworksModule {}
