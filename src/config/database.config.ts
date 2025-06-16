import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { MODELS } from 'src/include.model';

export const databaseConfig = (): SequelizeModuleOptions => ({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  models: [...MODELS],
  autoLoadModels: true,
  synchronize: true,
  dialectOptions: {
    ssl: {
      require: process.env.DB_SSL_REQUIRE === 'true',
      rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED === 'true',
    },
  },
});
