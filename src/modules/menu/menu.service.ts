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
    const maxOrder = await this.menuRepository.maximum('order');

    const newMenu = this.menuRepository.create({
      ...dto,
      order: maxOrder + 1,
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

    const oldOrder = menuUpdate.order;

    if (oldOrder !== dto.order) {
      const allMenus = await this.menuRepository.find();

      const menusToUpdate = allMenus.filter((menu) => {
        if (oldOrder < dto.order) {
          return menu.order > oldOrder && menu.order <= dto.order;
        } else {
          return menu.order >= dto.order && menu.order < oldOrder;
        }
      });

      for (const menu of menusToUpdate) {
        if (oldOrder < dto.order) {
          menu.order -= 1;
        } else {
          menu.order += 1;
        }
        await this.menuRepository.save(menu);
      }

      menuUpdate.order = dto.order;
    }

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
