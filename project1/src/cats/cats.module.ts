import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  // 위까지는 캡슐화 진행 한 것 사용 못함
  // 밑에서 exports를 해주면 외부에서 사용할 수 있도록 설정 하는 것
  // 이럼 AppController에서 CatsService 사용 가능!!
  exports: [CatsService],
})
export class CatsModule {}
