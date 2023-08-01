import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class Applicant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  full_name: string;

  @Column()
  phone_number: string;

  @CreateDateColumn()
  created_at: Date;
}
