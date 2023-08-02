import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('news')
export class News {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  image: string;

  @Column('date')
  date: Date;

  @Column('varchar')
  title_uz: string;

  @Column('varchar')
  title_ru: string;

  @Column('varchar')
  title_en: string;

  @Column('text')
  description_uz: string;

  @Column('text')
  description_ru: string;

  @Column('text')
  description_en: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
