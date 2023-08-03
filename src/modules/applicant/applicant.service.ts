import { Injectable } from '@nestjs/common';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Applicant } from './entities/applicant.entity';
import { Repository } from 'typeorm';
import { tg } from 'src/common/configs/telegram';

@Injectable()
export class ApplicantService {
  constructor(
    @InjectRepository(Applicant)
    private applicantRepository: Repository<Applicant>,
  ) {}
  async create(dto: CreateApplicantDto): Promise<Applicant> {
    const newApplication = await this.applicantRepository.create(dto);
    await this.applicantRepository.save(newApplication);
    tg.sendMessage(
      `Full Name: ${newApplication.full_name} 
        Phone: ${newApplication.phone_number}`,
      'info',
    );
    return newApplication;
  }

  async findAll() {
    const applications = await this.applicantRepository.find();
    return applications;
  }
}
