export const User = (user) => {
  const {
    userId,
    userInfos: { firstName, lastName, age },
    todayScore,
    keyData: { calorieCount, proteinCount, carbohydrateCount, lipidCount },
  } = user;
  return {
    userId,
    firstName,
    lastName,
    age,
    todayScore,
    calorieCount,
    proteinCount,
    carbohydrateCount,
    lipidCount,
  };
};
