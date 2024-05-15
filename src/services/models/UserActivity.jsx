/**
 * Create an object UserActivity
 * @param {object} userActivity
 * @returns {{ userId: number, sessions: { day: Date, kilogram: number, calories: number }[] }}
 * */
export const UserActivity = (userActivity) => {
  const { userId, sessions } = userActivity;
  return { userId, sessions };
};
