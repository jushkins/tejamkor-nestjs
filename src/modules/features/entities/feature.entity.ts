import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('feature')
export class Feature {
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

  @Column('varchar')
  feature_card_title_uz: string;

  @Column('varchar')
  feature_card_title_ru: string;

  @Column('varchar')
  feature_card_title_en: string;

  @Column('varchar')
  feature_card_svg1: string;

  @Column('varchar')
  feature_card_svg2: string;

  @Column('varchar')
  feature_card_svg3: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
