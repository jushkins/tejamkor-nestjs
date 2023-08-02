import { ParseFilePipeBuilder, HttpStatus } from '@nestjs/common';

export const parseFilePipeBuilder = new ParseFilePipeBuilder()
  .addMaxSizeValidator({
    maxSize: +1000000000000,
  })
  .addFileTypeValidator({
    fileType: /\.jpg|jpeg|mp4|gif|heic|png$/,
  })
  .build({
    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
  });
