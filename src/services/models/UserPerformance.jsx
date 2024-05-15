/**
 * Create and format an object UserPerformance
 * @param {object} userPerformance
 * @returns {{
 *  userId: number,
 *  data: {
 *    value: number,
 *    kind: string,
 *  }[]
 * }}
 */
export const UserPerformance = (userPerformance) => {
  // Data translation for display
  const kindTranslation = {
    cardio: 'Cardio',
    energy: 'Energie',
    endurance: 'Endurance',
    strength: 'Force',
    speed: 'Vitesse',
    intensity: 'Intensité',
  };

  /**
   * Data management and formatting to associate values with types (string)
   * rather than indexes
   * {value: 80, kind: 1} => {value: 90, kind: 'Intensité'}
   * @param {object} userPerf
   * @returns {object[]}
   */
  function convertDataFormat(userPerf) {
    const activityTypes = userPerf.kind;
    return userPerf.data.map((item) => ({
      value: item.value,
      kind: kindTranslation[activityTypes[item.kind]],
    }));
  }

  return {
    userId: userPerformance.userId,
    data: convertDataFormat(userPerformance).reverse(),
  };
};
