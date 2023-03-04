import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '../../utils/AppError';
import { DIET_COLLECTION } from '../storageConfig';
import { dietGetAll } from './dietGetAll';

type Params = {
  name: string;
  description: string;
  date: string;
  hour: string;
  status: 'on' | 'off';
};

export async function dietCreate(params: Params) {
  try {
    if (!params.name) {
      throw new AppError('Nome é obrigatório!');
    }

    if (!params.date) {
      throw new AppError('Data é obrigatório!');
    }

    if (!params.description) {
      throw new AppError('Descrição é obrigatório!');
    }

    if (!params.hour) {
      throw new AppError('Hora é obrigatório!');
    }

    if (!params.status) {
      throw new AppError('Status é obrigatório!');
    }

    const storageDiets = await dietGetAll();

    const storage = JSON.stringify([...storageDiets, params]);
    await AsyncStorage.setItem(DIET_COLLECTION, storage);
  } catch (err) {
    throw err;
  }
}
