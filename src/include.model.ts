import { Model, ModelCtor } from 'sequelize-typescript';
import { Session } from './apis/session/session.model';

export const MODELS: ModelCtor<Model<any, any>>[] = [Session];
