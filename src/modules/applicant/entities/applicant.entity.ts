import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('applicant')
export class Applicant {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  full_name: string;

  @Column('varchar')
  phone_number: string;

  @CreateDateColumn()
  created_at: Date;
}
