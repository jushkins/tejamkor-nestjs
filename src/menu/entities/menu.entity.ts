import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('menu')
export class Menu {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  name_uz: string;

  @Column('varchar')
  name_ru: string;

  @Column('varchar')
  name_en: string;

  @Column('int')
  order: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
