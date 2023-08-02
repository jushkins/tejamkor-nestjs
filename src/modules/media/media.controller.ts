import { DeleteMediaDto } from './dto/delete-media.dto';
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFiles,
  Body,
  Delete,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { multerConfig } from 'src/common/configs/multer.config';
import { ApiBearerAuth, ApiHeader, ApiTags } from '@nestjs/swagger';
import { MediaService } from './media.service';
import { parseFilePipeBuilder } from 'src/common/pipes/pipeBuilder';
@ApiTags('images upload & delete')
@Controller('media')
export class MediaController {
  constructor(private MediaService: MediaService) {}

  @ApiBearerAuth()
  @UseInterceptors(FilesInterceptor('images', +100000, multerConfig))
  @Post('upload')
  upload(
    @UploadedFiles(parseFilePipeBuilder)
    images: Array<Express.Multer.File>,
  ) {
    return this.MediaService.upload(images);
  }

  @ApiBearerAuth()
  @Delete('delete')
  delete(@Body() deleteMediaDto: DeleteMediaDto) {
    return this.MediaService.delete(deleteMediaDto);
  }
}
