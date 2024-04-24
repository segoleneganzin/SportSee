export const UserPerformance = (userPerformance) => {
  const { userId, kind, data } = userPerformance;
  return { userId, kind, data };
};
