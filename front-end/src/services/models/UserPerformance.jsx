/**
 * Create an object
 * @param {object} userPerformance
 * @returns {{
 *  userId: number,
 *  kind: { [key: number]: string },
 *  data: {
 *    value: number,
 *    kind: number,
 *  }[]
 * }}
 */
export const UserPerformance = (userPerformance) => {
  const { userId, kind, data } = userPerformance;
  return { userId, kind, data };
};
