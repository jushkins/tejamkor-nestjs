import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('banner')
export class Banner {
  @PrimaryGeneratedColumn('increment')
  id: number;

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

  @Column('varchar')
  image: string;

  @Column('int')
  order: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
