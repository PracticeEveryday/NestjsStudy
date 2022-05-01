// router 타입
// decorator타입 => 함수나 클래스에 기능을 첨가해주는 것
// 브라우저가 http 요청이 들어오면 controller가 받아서 응답을 하는 곳임.

import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello/:id/:name')
  getHello(): string {
    return this.appService.getHello();
  }
}
