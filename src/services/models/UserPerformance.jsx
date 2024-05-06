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
  const kindTranslation = {
    cardio: 'Cardio',
    energy: 'Energie',
    endurance: 'Endurance',
    strength: 'Force',
    speed: 'Vitesse',
    intensity: 'Intensité',
  };

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
