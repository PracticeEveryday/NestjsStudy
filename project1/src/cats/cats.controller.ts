import {
  Controller,
  Delete,
  Get,
  HttpException,
  Patch,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from '../http-exception.filter';

@Controller('cats')
// controller 전부에 해당되게 넣을 수도 있다.
@UseFilters(HttpExceptionFilter)
export class CatsController {
  // 예외 처리
  // catscontroller라는 소비자가 catsService라는 제품을 주입받은 것 공급자 catsservice
  constructor(private readonly catsService: CatsService) {}

  // cats/
  @Get()
  // 각각에 catch문 넣을 수도 있고
  // @UseFilters(HttpExceptionFilter)
  getAllCat() {
    // express throw new Error("") = throw new HttpException('에러 메세지 넣는 곳', status 넣는 곳)
    // 위에 UseFilters를 통해 밑에 던져진 오류가 걸러져서 response되게 됨
    throw new HttpException('api is broken', 401);
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
