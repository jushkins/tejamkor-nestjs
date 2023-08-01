import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class About {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title_uz: string;

  @Column()
  title_ru: string;

  @Column()
  title_en: string;

  @Column()
  description_uz: string;

  @Column()
  description_ru: string;

  @Column()
  description_en: string;

  @Column()
  video_img: string;

  @Column()
  video: string;

  @Column()
  logo: string;

  @Column()
  address: string;

  @Column()
  phone_number: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
