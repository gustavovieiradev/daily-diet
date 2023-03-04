import AsyncStorage from '@react-native-async-storage/async-storage';
import { DIET_COLLECTION } from '../storageConfig';

type Diets = {
  name: string;
  description: string;
  date: string;
  hour: string;
  status: 'on' | 'off';
};

/**
 * Get all diets created in storage
 * @returns
 */
export async function dietGetAll(): Promise<Diets[]> {
  try {
    const storage = await AsyncStorage.getItem(DIET_COLLECTION);
    const diets: Diets[] = storage ? JSON.parse(storage) : [];
    return diets;
  } catch (e) {
    throw e;
  }
}
