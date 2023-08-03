import { Controller, Post, Body, Get } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('ADMIN AUTH')
@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Post('login')
  @ApiOperation({ summary: 'Admin login' })
  @ApiBody({ type: CreateAdminDto })
  login(@Body() dto: CreateAdminDto) {
    return this.adminService.login(dto);
  }
}
