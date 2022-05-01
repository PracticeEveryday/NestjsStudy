import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  // nest js 답게 logging 할때 logger라는 class 사용
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    // Request 요청하는 정보가 담김
    // console 보다 nestjs에서 제공하는 logging을 쓰면 더 이쁘게 나온다.

    // console.log(req.ip);
    // console.log(req.originalUrl);
    // response가 완료 됬을때
    res.on('finish', () => {
      this.logger.log(
        `${req.ip} ${req.method} ${res.statusCode}`,
        req.originalUrl,
      );
    });
    next();
  }
}
