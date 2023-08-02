import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { About } from 'src/about/entities/about.entity';
import { Admin } from 'src/admin/entities/admin.entity';
import { Applicant } from 'src/applicant/entities/applicant.entity';
import { Banner } from 'src/banner/entities/banner.entity';
import { Feature } from 'src/features/entities/feature.entity';
import { Menu } from 'src/menu/entities/menu.entity';
import { News } from 'src/news/entities/news.entity';
import { ServiceCard } from 'src/service_cards/entities/service_card.entity';
import { SocialNetwork } from 'src/social_networks/entities/social_network.entity';
import { Statistic } from 'src/statistics/entities/statistic.entity';

const Dbconfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'jushkin',
  password: 'George.101',
  database: 'tejamkorUz',
  entities: [
    Admin,
    Applicant,
    About,
    Banner,
    Feature,
    Menu,
    News,
    ServiceCard,
    SocialNetwork,
    Statistic,
  ],
  synchronize: false,
  migrationsRun: false,
  logger: 'advanced-console',
  logging: 'all',
};

export default Dbconfig;
