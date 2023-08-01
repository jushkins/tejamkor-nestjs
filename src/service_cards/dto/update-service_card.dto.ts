import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceCardDto } from './create-service_card.dto';

export class UpdateServiceCardDto extends PartialType(CreateServiceCardDto) {}
