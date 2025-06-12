import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Session } from './session.model';

@Module({
  imports: [SequelizeModule.forFeature([Session])],
  providers: [SessionService],
  controllers: [SessionController],
})
export class SessionModule {}
