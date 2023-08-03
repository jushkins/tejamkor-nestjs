import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('MENU')
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  @ApiOperation({ summary: 'Create menu info' })
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menuService.create(createMenuDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all menu info' })
  findAll() {
    return this.menuService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get menu info by ID' })
  findOne(@Param('id') id: number) {
    return this.menuService.findOneById(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update menu info by ID' })
  update(@Param('id') id: number, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.updateById(+id, updateMenuDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete menu info by ID' })
  remove(@Param('id') id: number) {
    return this.menuService.removeById(+id);
  }
}
