import {
  Column,
  CreatedAt,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'session',
  timestamps: false,
})
export class Session extends Model<Session> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  start_time: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  end_time: Date;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  duration: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  milk_quantity: number;

  @CreatedAt
  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  created_at: Date;
}
