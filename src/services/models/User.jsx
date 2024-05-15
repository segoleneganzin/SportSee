/**
 * Create and format an object User
 * @param {object} user
 * @returns {{
 *  userId: number,
 *  firstName: string,
 *  lastName: string,
 *  age: number,
 *  todayScore: number,
 *  calorieCount: number,
 *  proteinCount: number,
 *  carbohydrateCount: number,
 *  lipidCount: number
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
