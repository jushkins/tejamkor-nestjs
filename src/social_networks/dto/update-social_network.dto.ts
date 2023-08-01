import { PartialType } from '@nestjs/mapped-types';
import { CreateSocialNetworkDto } from './create-social_network.dto';

export class UpdateSocialNetworkDto extends PartialType(CreateSocialNetworkDto) {}
