import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('statistics')
export class Statistic {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int')
  count: number;

  @Column('varchar')
  title_uz: string;

  @Column('varchar')
  title_ru: string;

  @Column('varchar')
  title_en: string;

  @Column('int')
  order: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
