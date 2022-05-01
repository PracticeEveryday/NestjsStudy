import { Injectable } from '@nestjs/common';

// 공급자로 취급이 되니 Injectable!! 주입이 가능한!! 이라는 데코레이터가 붙음.
@Injectable()
export class AppService {
  getHello(): string {
    // 비지니스 로직 실행
    console.log('hello');
    return 'Hello World!';
  }
}
