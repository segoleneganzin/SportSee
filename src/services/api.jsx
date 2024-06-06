import { fetchData } from './fetchData';
import { User } from './models/User';
import { UserActivity } from './models/UserActivity';
import { UserAverageSessions } from './models/UserAverageSessions';
import { UserPerformance } from './models/UserPerformance';

// manage mocked datas or api
const mockedDatas = true;
console.log('Données mockées : ' + mockedDatas);

/**
 * Manages data sourcing route
 * Mocked data files (json) must take the name of the dataType !!
 * domain and uri depends of mockedDatas status
 * resolve fetchData promise
 * @param {number} userId
 * @param {string} dataType
 *  @returns {Promise<any>}
 */
const getDatasById = (userId, dataType) => {
  let endpoint;
  if (mockedDatas) {
    endpoint = `https://sportsee-five.vercel.app/mocks/${dataType}.json`;
  } else {
    // api
    endpoint = `http://localhost:3000${
      dataType === 'user' ? `/user/${userId}` : `/user/${userId}/${dataType}`
    }`;
  }
  return fetchData(`${endpoint}`, userId, mockedDatas);
};

// ******* READ functions

/**
 * Get the user according to his id
 * Format datas by creating personnalized object
 * @param {number} userId - The ID of the user to retrieve.
 * @returns {Promise<User>} A Promise resolving to the user object.
 */
export const getUserById = async (userId) => {
  return User(await getDatasById(userId, 'user'));
};

/**
 * Get the user activity according to user's id
 * Format datas
 * @param {number} userId - The ID of the user to retrieve.
 * @returns {Promise<UserActivity>} A Promise resolving to the userActivity object.
 */
export const getUserActivityById = async (userId) => {
  return UserActivity(await getDatasById(userId, 'activity'));
};

/**
 * Get the user average sessions according to user's id
 * Format datas
 * @param {number} userId - The ID of the user to retrieve.
 * @returns {Promise<UserAverageSessions>} A Promise resolving to the userAverageSessions object.
 */
export const getUserAverageSessionsById = async (userId) => {
  return UserAverageSessions(await getDatasById(userId, 'average-sessions'));
};

/**
 * Get the user performance according to user's id
 * Format datas
 * @param {number} userId - The ID of the user to retrieve.
 * @returns {Promise<UserPerformance>} A Promise resolving to the userPerformance object.
 */
export const getUserPerformanceById = async (userId) => {
  return UserPerformance(await getDatasById(userId, 'performance'));
};
