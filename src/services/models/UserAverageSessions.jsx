/**
 * Create an object UserAverageSessions
 * @param {object} userAverageSessions
 * @returns {{ userId: number, sessions: { day: number, sessionLength: number }[] }}
 * */
export const UserAverageSessions = (userAverageSessions) => {
  const { userId, sessions } = userAverageSessions;
  return { userId, sessions };
};
