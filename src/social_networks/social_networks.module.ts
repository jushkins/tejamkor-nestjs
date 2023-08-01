import { Module } from '@nestjs/common';
import { SocialNetworksService } from './social_networks.service';
import { SocialNetworksController } from './social_networks.controller';

@Module({
  controllers: [SocialNetworksController],
  providers: [SocialNetworksService]
})
export class SocialNetworksModule {}
