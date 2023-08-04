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
import { ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { MediaService } from './media.service';
import { parseFilePipeBuilder } from 'src/common/pipes/pipeBuilder';
@ApiTags('IMAGE UPLOAD & DELETE')
@Controller('media')
export class MediaController {
  constructor(private MediaService: MediaService) {}

  @UseInterceptors(FilesInterceptor('images', +100000, multerConfig))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'List of images',
    type: DeleteMediaDto,
  })
  @Post('upload')
  @ApiOperation({ summary: 'Upload image' })
  upload(
    @UploadedFiles(parseFilePipeBuilder)
    images: Array<Express.Multer.File>,
  ) {
    return this.MediaService.upload(images);
  }

  @Delete('delete')
  @ApiOperation({ summary: 'Delete image' })
  delete(@Body() deleteMediaDto: DeleteMediaDto) {
    return this.MediaService.delete(deleteMediaDto);
  }
}
