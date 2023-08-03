import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicantModule } from './modules/applicant/applicant.module';
import { MenuModule } from './modules/menu/menu.module';
import { AboutModule } from './modules/about/about.module';
import { AdminModule } from './modules/admin/admin.module';
import { BannerModule } from './modules/banner/banner.module';
import { FeaturesModule } from './modules/features/features.module';
import { NewsModule } from './modules/news/news.module';
import { ServiceCardsModule } from './modules/service_cards/service_cards.module';
import { SocialNetworksModule } from './modules/social_networks/social_networks.module';
import { StatisticsModule } from './modules/statistics/statistics.module';
import 'reflect-metadata';
import Dbconfig from './common/configs/typeorm.config';
import { MediaModule } from './modules/media/media.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(Dbconfig),
    ApplicantModule,
    MenuModule,
    BannerModule,
    ServiceCardsModule,
    FeaturesModule,
    AboutModule,
    SocialNetworksModule,
    NewsModule,
    StatisticsModule,
    AdminModule,
    MediaModule,
  ],
})
export class AppModule {}
