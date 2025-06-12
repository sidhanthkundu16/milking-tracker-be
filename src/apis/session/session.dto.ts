import {
  IsNotEmpty,
  IsDateString,
  IsPositive,
  IsNumber,
} from 'class-validator';

export class CreateSessionDto {
  @IsNotEmpty()
  @IsDateString()
  start_time: string;

  @IsNotEmpty()
  @IsDateString()
  end_time: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  duration: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  milk_quantity: number;
}
