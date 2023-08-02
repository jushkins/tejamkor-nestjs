import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { CreateTelegramDto } from './dto/send-telegram.dto';

@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}
}
