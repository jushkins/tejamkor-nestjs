import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApplicantService } from './applicant.service';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import {
  ApiBody,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('APPLICANT')
@Controller('applicant')
export class ApplicantController {
  constructor(private readonly applicantService: ApplicantService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new application' })
  @ApiBody({ type: CreateApplicantDto })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
    type: Error,
  })
  create(@Body() createApplicantDto: CreateApplicantDto) {
    return this.applicantService.create(createApplicantDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all applications' })
  findAll() {
    return this.applicantService.findAll();
  }
}
