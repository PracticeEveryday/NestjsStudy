import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  // catscontroller라는 소비자가 catsService라는 제품을 주입받은 것 공급자 catsservice
  constructor(private readonly catsService: CatsService) {}

  // cats/
  @Get()
  getAllCat() {
    return 'all cat';
  }
  // cats/:id
  @Get(':id')
  getOneCat() {
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'updateCat';
  }

  @Patch(':id')
  udatePartialCat() {
    return ' get cat';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete cat';
  }
}
