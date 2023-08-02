import { Injectable } from '@nestjs/common';
import { DeleteMediaDto } from './dto/delete-media.dto';
import { unlinkSync } from 'fs';

@Injectable()
export class MediaService {
  async upload(imagesData: Array<Express.Multer.File>) {
    try {
      let images: string | string[] = [];
      for (const image of imagesData) {
        images.push(image.path);
      }
      images = images.join(',');
      return images;
    } catch (err) {
      throw err;
    }
  }

  async delete(deleteMediaDto: DeleteMediaDto) {
    try {
      const { arrayOfUrl } = deleteMediaDto;
      for (const url of arrayOfUrl) {
        const pic = url.split('/');
        unlinkSync('./images/' + pic[pic.length - 1]);
      }
    } catch (err) {
      throw err;
    }
  }
}
