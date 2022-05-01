import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // 비지니스 로직 실행
    return 'Hello World!';
  }
}
