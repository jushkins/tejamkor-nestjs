import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AboutService } from './about.service';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('ABOUT')
@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new info' })
  @ApiBody({ type: CreateAboutDto })
  create(@Body() createAboutDto: CreateAboutDto) {
    return this.aboutService.create(createAboutDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all info' })
  findAll() {
    return this.aboutService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get info by id' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the about data.',
    type: 'number',
  })
  findOne(@Param('id') id: number) {
    return this.aboutService.findOneById(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update about info' })
  @ApiBody({ type: UpdateAboutDto })
  update(@Param('id') id: number, @Body() updateAboutDto: UpdateAboutDto) {
    return this.aboutService.updateById(+id, updateAboutDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete about info' })
  remove(@Param('id') id: number) {
    return this.aboutService.removeById(+id);
  }
}
