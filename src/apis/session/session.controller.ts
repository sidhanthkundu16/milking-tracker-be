import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { SessionService } from './session.service';
import { CreateSessionDto } from './session.dto';

@Controller('sessions')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}
  @Post()
  create(@Body() session: CreateSessionDto) {
    return this.sessionService.create(session);
  }

  @Get()
  findAll(@Query('limit') limit: string, @Query('offset') offset: string) {
    const parsedLimit = parseInt(limit, 10);
    const parsedOffset = parseInt(offset, 10);
    return this.sessionService.findAll(parsedLimit, parsedOffset);
  }
}
