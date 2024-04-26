/**
 * Create an object
 * @param {object} userAverageSessions
 * @returns {{ userId: string, sessions: { day: number, sessionLength: number }[] }}
 * */
export const UserAverageSessions = (userAverageSessions) => {
  const { userId, sessions } = userAverageSessions;
  return { userId, sessions };
};
