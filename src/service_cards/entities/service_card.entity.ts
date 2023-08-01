import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ServiceCard {
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
  image: string;

  @Column()
  order: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
