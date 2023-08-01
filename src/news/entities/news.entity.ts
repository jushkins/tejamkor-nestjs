import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class News {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column()
  date: Date;

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
