import { HttpException, Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu) private menuRepository: Repository<Menu>,
  ) {}
  async create(dto: CreateMenuDto) {
    const lastMenu = await this.menuRepository.findOne({
      where: {},
      order: { id: 'DESC' },
    });

    const newMenuOrder = lastMenu ? lastMenu.order + 1 : 1;

    const newMenu = await this.menuRepository.create({
      ...dto,
      order: newMenuOrder,
    });

    await this.menuRepository.save(newMenu);

    return newMenu;
  }

  async findAll() {
    const allMenu = await this.menuRepository.find();
    return allMenu;
  }

  async findOneById(id: number) {
    const menu = await this.menuRepository.findOneBy({ id });
    if (!menu) {
      throw new HttpException('Menu info not found', 404);
    }
    return menu;
  }

  async updateById(id: number, dto: UpdateMenuDto) {
    const menuUpdate = await this.menuRepository.findOneBy({ id });
    if (!menuUpdate) {
      throw new HttpException('Info not found', 404);
    }
    Object.assign(menuUpdate, dto);
    await this.menuRepository.save(menuUpdate);
    return menuUpdate;
  }

  async removeById(id: number) {
    const menuToRemove = await this.menuRepository.findOneBy({ id });
    if (!menuToRemove) {
      throw new HttpException('Info not found', 404);
    }
    await this.menuRepository.remove(menuToRemove);
    return { message: 'Info is deleted' };
  }
}
