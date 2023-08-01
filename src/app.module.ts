import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './admin/entities/admin.entity';
import { ApplicantModule } from './applicant/applicant.module';
import { MenuModule } from './menu/menu.module';
import { BannerModule } from './banner/banner.module';
import { ServiceCardsModule } from './service_cards/service_cards.module';
import { FeaturesModule } from './features/features.module';
import { AboutModule } from './about/about.module';
import { SocialNetworksModule } from './social_networks/social_networks.module';
import { NewsModule } from './news/news.module';
import { StatisticsModule } from './statistics/statistics.module';
import { About } from './about/entities/about.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'jushkin',
      password: 'George.101',
      database: 'tejamkorUz',
      entities: [Admin, About],
      synchronize: true,
    }),
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
