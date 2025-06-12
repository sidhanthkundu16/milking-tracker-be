import { Body, Controller, Get, Post } from '@nestjs/common';
import { SessionService } from './session.service';
import { CreateSessionDto } from './session.dto';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}
  @Post('/create-session')
  create(@Body() session: CreateSessionDto) {
    return this.sessionService.create(session);
  }

  @Get()
  findAll() {
    return this.sessionService.findAll();
  }
}
