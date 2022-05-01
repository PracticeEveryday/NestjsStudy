import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './logger.middleware';
@Module({
  // CatsModule + UsersModule 합쳐져서 AppModuel이 실행되서 나감
  // module을 가져오는 역할 export를 한 상품들을 쓸 수가 있음.
  // CatsModule + UsersModule의 제품을 AppController, AppService에서 쓸 수 있음.
  imports: [CatsModule],
  // 소비자 AppController가 여기서 AppService에서 받아감
  // controller는 여기서 providers가 제공하는 주입할 수 있는 것을 받아서 씀
  controllers: [AppController],
  // 제품의 공급자 like 사업자 등록
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // cats router에 바인딩
    // forRoutes('*') 전체 endpoint looger middleware 수행
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
{
}

// 객체지향 프로그램의 핵심 목표가 실생활과 유사하게 코드를 짠다!
// 실생활에서 일어나느 공급자 소비자 관계 제품 이런 것들이 nestjs에서 묘사가 되어있음
// 의존성을 명료하게 코드에 남김으로써 확실하게 의존성 관리!! 유지 보수가 좋아짐

// module 자기 자신이 만든 controller, servide만 여기에 들어가는 것이 좋고
// 다른 모듈을 불러 오고 싶으면 각 캡슐화 된 모듈을 통해 export를 해 public으로 만들어 불러서 쓰는 것이 더 좋다
// 그럼 유지 보수가 쉬워 지니까!! 왜? 복잡하게 app 안에 모든 것을 다 안 넣어도 되잖아
