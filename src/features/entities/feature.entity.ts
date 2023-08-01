import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Feature {
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
  feature_card_title_uz: string;

  @Column()
  feature_card_title_ru: string;

  @Column()
  feature_card_title_en: string;

  @Column()
  feature_card_svg1: string;

  @Column()
  feature_card_svg2: string;

  @Column()
  feature_card_svg3: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
