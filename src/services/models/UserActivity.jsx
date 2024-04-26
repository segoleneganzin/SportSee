/**
 * Create an object
 * @param {object} userActivity
 * @returns {{ userId: string, sessions: { day: Date, kilogram: number, calories: number }[] }}
 * */
export const UserActivity = (userActivity) => {
  const { userId, sessions } = userActivity;
  return { userId, sessions };
};
