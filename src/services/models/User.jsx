/**
 * Create an object
 * @param {object} user
 * @returns {{
 *  userId: number,
 *  userInfos: { firstName: string, lastName: string, age: number },
 *  todayScore: number,
 *  keyData: {
 *    calorieCount: number,
 *    proteinCount: number,
 *    carbohydrateCount: number,
 *    lipidCount: number
 *  }
 * }}
 */

export const User = (user) => {
  const {
    id,
    userInfos: { firstName, lastName, age },
    todayScore,
    score,
    keyData: { calorieCount, proteinCount, carbohydrateCount, lipidCount },
  } = user;
  return {
    userId: id,
    firstName,
    lastName,
    age,
    todayScore: todayScore || score,
    calorieCount,
    proteinCount,
    carbohydrateCount,
    lipidCount,
  };
};
