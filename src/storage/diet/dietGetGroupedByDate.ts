import { dietGetAll } from './dietGetAll';

type Diet = {
  name: string;
  description: string;
  date: string;
  hour: string;
  status: 'on' | 'off';
};

type DietGroupedDate = {
  date: string;
  diets: Diet[];
};

/**
 * List all diets grouped by date
 */
export async function dietGetGroupedByDate() {
  try {
    const allDiets = await dietGetAll();

    if (!allDiets.length) {
      return [];
    }

    const dietsGrouped: DietGroupedDate[] = [];

    allDiets.forEach((ad) => {
      const indexDietsGrouped = dietsGrouped.findIndex(
        (dg) => dg.date === ad.date
      );

      if (indexDietsGrouped > -1) {
        dietsGrouped[indexDietsGrouped].diets.push(ad);
      } else {
        dietsGrouped.push({
          date: ad.date,
          diets: [ad],
        });
      }
    });

    return dietsGrouped;
  } catch (err) {
    throw err;
  }
}
