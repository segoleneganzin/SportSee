// Api call + creating object
import {
  getUserApi,
  getActivityApi,
  getAverageSessionsApi,
  getPerformanceApi,
} from './api';
import { User } from './models/User';
import { UserActivity } from './models/UserActivity';
import { UserAverageSessions } from './models/UserAverageSessions';
import { UserPerformance } from './models/UserPerformance';

// TODO context for mockedDatas
const mockedDatas = true;

// user
export const getUserById = async (userId) => {
  const data = await getUserApi(userId, mockedDatas);
  const user = User(data);
  return user;
};

// activity
export const getUserActivityById = async (userId) => {
  const data = await getActivityApi(userId, mockedDatas);
  const userActivity = UserActivity(data);
  return userActivity;
};

// average sessions
export const getUserAverageSessionsById = async (userId) => {
  const data = await getAverageSessionsApi(userId, mockedDatas);
  const userAverageSessions = UserAverageSessions(data);
  return userAverageSessions;
};

// performance
export const getUserPerformanceById = async (userId) => {
  const data = await getPerformanceApi(userId, mockedDatas);
  const userPerformance = UserPerformance(data);
  return userPerformance;
};
