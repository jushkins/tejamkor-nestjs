import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { About } from 'src/modules/about/entities/about.entity';
import { Admin } from 'src/modules/admin/entities/admin.entity';
import { Applicant } from 'src/modules/applicant/entities/applicant.entity';
import { Banner } from 'src/modules/banner/entities/banner.entity';
import { Feature } from 'src/modules/features/entities/feature.entity';
import { Menu } from 'src/modules/menu/entities/menu.entity';
import { News } from 'src/modules/news/entities/news.entity';
import { ServiceCard } from 'src/modules/service_cards/entities/service_card.entity';
import { SocialNetwork } from 'src/modules/social_networks/entities/social_network.entity';
import { Statistic } from 'src/modules/statistics/entities/statistic.entity';

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
  // logger: 'advanced-console',
  // logging: 'all',
};

export default Dbconfig;
