import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  // provider는 캡슐화가 되어 있어서 다른 모듈에서 기본적으로 사용 불가능
  providers: [CatsService],
  // 위까지는 캡슐화 진행 한 것 사용 못함 => Private임 원래는 so export 안하면 Module import 등등 해줘야함
  // 밑에서 exports를 해주면 외부에서 사용할 수 있도록 설정 하는 것
  // 이럼 AppController에서 CatsService 사용 가능!!
  // 은닉화를 풀어준다 => CatsService가 public으로 바뀜
  exports: [CatsService],
})
export class CatsModule {}
