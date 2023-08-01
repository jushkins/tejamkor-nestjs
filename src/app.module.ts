import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { ApplicantModule } from './applicant/applicant.module';
import { MenuModule } from './menu/menu.module';
import { BannerModule } from './banner/banner.module';
import { ServiceCardsModule } from './service_cards/service_cards.module';
import { FeaturesModule } from './features/features.module';
import { AboutModule } from './about/about.module';
import { SocialNetworksModule } from './social_networks/social_networks.module';
import { NewsModule } from './news/news.module';
import { StatisticsModule } from './statistics/statistics.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import Dbconfig from './common/orm.tsconfig';
import 'reflect-metadata';

@Module({
  imports: [
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
  ],
})
export class AppModule {}
