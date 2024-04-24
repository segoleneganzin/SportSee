export const UserActivity = (userActivity) => {
  const { userId, sessions } = userActivity;
  return { userId, sessions };
};
