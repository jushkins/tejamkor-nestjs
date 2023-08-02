import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('admin')
export class Admin {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  email: string;

  @Column('varchar')
  password: string;
}
