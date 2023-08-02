import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApplicantService } from './applicant.service';
import { CreateApplicantDto } from './dto/create-applicant.dto';

@Controller('applicant')
export class ApplicantController {
  constructor(private readonly applicantService: ApplicantService) {}

  @Post()
  create(@Body() createApplicantDto: CreateApplicantDto) {
    return this.applicantService.create(createApplicantDto);
  }

  @Get()
  findAll() {
    return this.applicantService.findAll();
  }
}
