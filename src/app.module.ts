import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseConfig } from './config/database.config';
import { SessionModule } from './apis/session/session.module';

@Module({
  imports: [SequelizeModule.forRoot(databaseConfig), SessionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
