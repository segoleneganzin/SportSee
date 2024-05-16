/**
 * Create an object UserActivity
 * @param {object} userActivity
 * @returns {{ userId: number, sessions: { day: Date, kilogram: number, calories: number }[] }}
 * */
export const UserActivity = (userActivity) => {
  const { userId, sessions } = userActivity;
  const sessionsWithDate = sessions.map((session) => ({
    ...session,
    day: new Date(session.day), // convert date : string to Date
  }));
  return { userId, sessions: sessionsWithDate };
};
