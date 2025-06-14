import {
  Injectable,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Session } from './session.model';
import { CreateSessionDto } from './session.dto';
import { DatabaseError } from 'sequelize';

@Injectable()
export class SessionService {
  constructor(
    @InjectModel(Session)
    private sessionModel: typeof Session,
  ) {}

  async create(session: CreateSessionDto) {
    try {
      this.validateSessionData(session);

      const serializeData = this.mapDtoToModel(session);
      const createdSession = await this.sessionModel.create(serializeData);
      return createdSession;
    } catch (error) {
      if (error instanceof DatabaseError) {
        throw new InternalServerErrorException('Database error occurred');
      }
      throw error;
    }
  }

  async findAll(limit: number, offset: number) {
    try {
      const sessions = await this.sessionModel.findAll({
        limit,
        offset,
        order: [['created_at', 'DESC']],
      });

      const count = await this.sessionModel.count();

      return { data: sessions, count };
    } catch {
      throw new InternalServerErrorException('Failed to fetch sessions');
    }
  }

  private validateSessionData(session: CreateSessionDto) {
    const startTime = new Date(session.start_time);
    const endTime = new Date(session.end_time);

    if (isNaN(startTime.getTime()) || isNaN(endTime.getTime())) {
      throw new BadRequestException(
        'Invalid date format for start_time or end_time',
      );
    }

    if (endTime <= startTime) {
      throw new BadRequestException('end_time must be after start_time');
    }

    if (session.duration <= 0) {
      throw new BadRequestException(
        'Session duration should be greater than 0',
      );
    }

    if (session.milk_quantity <= 0) {
      throw new BadRequestException('Milk quantity should be greater than 0');
    }
  }

  private mapDtoToModel(dto: CreateSessionDto): Partial<Session> {
    return {
      start_time: new Date(dto.start_time),
      end_time: new Date(dto.end_time),
      duration: dto.duration,
      milk_quantity: dto.milk_quantity,
    };
  }
}
