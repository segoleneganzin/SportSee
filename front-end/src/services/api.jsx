// Api call + creating object
// manage mocked datas or api

import { fetchData } from './fetchData';
import { User } from './models/User';
import { UserActivity } from './models/UserActivity';
import { UserAverageSessions } from './models/UserAverageSessions';
import { UserPerformance } from './models/UserPerformance';

const mockedDatas = true;

/**
 * Manages data sourcing route
 * Mocked data files (json) must take the name of the dataType !!
 * @param {number} userId
 * @param {string} dataType
 * @returns {object}
 */
const getDatasById = async (userId, dataType) => {
  let uri = mockedDatas
    ? `/mocks/${dataType}.json`
    : `/user/${userId}/${dataType}`;
  if (dataType === 'user' && !mockedDatas) {
    uri = `/user/${userId}`;
  }
  const data = await fetchData(uri, userId, mockedDatas);
  return data;
};

/**
 * Get the user depends of his id
 * Format datas
 * @param {number} userId - The ID of the user to retrieve.
 * @returns {Promise<User>} A Promise resolving to the user object.
 */
export const getUserById = async (userId) => {
  const data = await getDatasById(userId, 'user');
  return User(data);
};

/**
 * Get the user activity depends of user's id
 * Format datas
 * @param {number} userId - The ID of the user to retrieve.
 * @returns {Promise<UserActivity>} A Promise resolving to the userActivity object.
 */
export const getUserActivityById = async (userId) => {
  const data = await getDatasById(userId, 'activity');
  return UserActivity(data);
};

/**
 * Get the user average sessions depends of user's id
 * Format datas
 * @param {number} userId - The ID of the user to retrieve.
 * @returns {Promise<UserAverageSessions>} A Promise resolving to the userAverageSessions object.
 */
export const getUserAverageSessionsById = async (userId) => {
  const data = await getDatasById(userId, 'average-sessions');
  return UserAverageSessions(data);
};

/**
 * Get the user performance depends of user's id
 * Format datas
 * @param {number} userId - The ID of the user to retrieve.
 * @returns {Promise<UserPerformance>} A Promise resolving to the userPerformance object.
 */
export const getUserPerformanceById = async (userId) => {
  const data = await getDatasById(userId, 'performance');
  return UserPerformance(data);
};
