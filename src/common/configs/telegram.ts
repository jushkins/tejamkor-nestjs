import { config } from 'dotenv';
import * as TelegramLogger from 'node-telegram-logger';
config();
export let tg = new TelegramLogger(process.env.TOKEN, process.env.TG_CHANNEL);
