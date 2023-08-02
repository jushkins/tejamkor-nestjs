import { Injectable } from '@nestjs/common';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Applicant } from './entities/applicant.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ApplicantService {
  constructor(
    @InjectRepository(Applicant)
    private applicantRepository: Repository<Applicant>,
  ) {}
  async create(dto: CreateApplicantDto): Promise<Applicant> {
    const newApplication = await this.applicantRepository.create(dto);
    await this.applicantRepository.save(newApplication);
    return newApplication;
  }

  async findAll() {
    const applications = await this.applicantRepository.find();
    return applications;
  }
}
