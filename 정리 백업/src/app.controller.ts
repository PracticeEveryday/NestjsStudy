// router 타입
// decorator타입 => 함수나 클래스에 기능을 첨가해주는 것
// 브라우저가 http 요청이 들어오면 controller가 받아서 응답을 하는 곳임.

import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

// decorator 기능 첨가하는 아이
// class 안에서 service 사용
// Controller('endpoint')
@Controller('cats')
// AppController는 소비자
export class AppController {
  // appService는 제품 =>생산하는 provider인 공급자를 nestjs가 찾아가는 가야함
  // 그 경로가 적혀 있는 곳이 app.service.ts의 @Module 내의 provider => 의존성 주입!!
  // 생성자로부터 인스턴스로 받아 제품을 사용함!
  constructor(private readonly appService: AppService) {}

  // 의존성 주입 => 라우터와 서비스를 구분하기 위해서 : 유지보수 가독성!!
  // @Get('endpoint') => localhost:3000/endpoint/endpoint => 경로의 해당 부분 반복할 필요가 없음.
  @Get('hello/:id/:name')
  getHello(
    @Req() req: Request,
    @Body() Body,
    @Param() param: { id: string; name: string },
  ): string {
    console.log(req);
    console.log(param);
    // AppController가 AppService 제품을 받아 getHello를 사용함!!
    return this.appService.getHello();
  }
}
