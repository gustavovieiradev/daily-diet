import { dietGetAll } from './dietGetAll';

type Diet = {
  name: string;
  description: string;
  date: string;
  hour: string;
  status: 'on' | 'off';
};

type DietGroupedDate = {
  title: string;
  data: Diet[];
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
        (dg) => dg.title === ad.date
      );

      if (indexDietsGrouped > -1) {
        dietsGrouped[indexDietsGrouped].data.push(ad);
      } else {
        dietsGrouped.push({
          title: ad.date,
          data: [ad],
        });
      }
    });

    return dietsGrouped;
  } catch (err) {
    throw err;
  }
}
