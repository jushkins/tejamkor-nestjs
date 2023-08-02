import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('about')
export class About {
  @PrimaryGeneratedColumn()
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

  @Column('text')
  video_img: string;

  @Column('varchar')
  video: string;

  @Column('varchar')
  logo: string;

  @Column('varchar')
  address: string;

  @Column('varchar')
  phone_number: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
