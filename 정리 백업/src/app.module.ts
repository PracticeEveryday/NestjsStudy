import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  // 소비자 AppController가 여기서 AppService에서 받아감
  controllers: [AppController],
  // 제품의 공급자 like 사업자 등록
  providers: [AppService],
})
export class AppModule {}

// 객체지향 프로그램의 핵심 목표가 실생활과 유사하게 코드를 짠다!
// 실생활에서 일어나느 공급자 소비자 관계 제품 이런 것들이 nestjs에서 묘사가 되어있음
// 의존성을 명료하게 코드에 남김으로써 확실하게 의존성 관리!! 유지 보수가 좋아짐
