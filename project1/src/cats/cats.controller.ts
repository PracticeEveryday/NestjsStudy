import {
  Controller,
  Delete,
  Get,
  HttpException,
  Patch,
  Post,
  Put,
  UseFilters,
  Param,
  ParseIntPipe,
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
  getOneCat(@Param('id', ParseIntPipe) param: number) {
    // pipes로 형변환이 가능 number로
    // piptes가 자동으로 Validation error까지 내줌!! 'abc' string으로 나오면!!
    console.log(param);
    console.log(typeof param);
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
/**
 * Pipe는 클라이언트 요청에서 들어오는 데이터를 유효성 검사 및 변환을 수행하여 서버가 원하는
 * 데이터를 얻을 수 있도록 도와주는 클래스!!
 */
