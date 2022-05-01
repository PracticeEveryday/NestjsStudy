import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const error = exception.getResponse() as
      | string
      | { error: string; statusCode: number; message: string | string[] };

    // res.status(400).send({}) 와 대응됨
    if (typeof error === 'string') {
      // error 우리가 인자값을 넣어서 발생시킨 경우
      response.status(status).json({
        success: false,
        timestamp: new Date().toISOString(),
        path: request.url,
        error: error,
      });
    } else {
      // 404 error 처럼 nest 자체에서 벌어지는 error
      response.status(status).json({
        success: false,
        timestamp: new Date().toISOString(),
        ...error,
      });
    }
  }
}
