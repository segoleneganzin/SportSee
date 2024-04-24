import { fetchData } from './fetchData';

export const getUserApi = async (userId, mockedDatas) => {
  const uri = mockedDatas ? '/mocks/user.json' : `/user/${userId}`;
  return await fetchData(uri, userId, mockedDatas);
};

export const getActivityApi = async (userId, mockedDatas) => {
  const uri = mockedDatas
    ? '/mocks/userActivity.json'
    : `/user/${userId}/activity`;
  return await fetchData(uri, userId, mockedDatas);
};

export const getAverageSessionsApi = async (userId, mockedDatas) => {
  const uri = mockedDatas
    ? '/mocks/userAverageSessions.json'
    : `/user/${userId}/averageSessions`;
  return await fetchData(uri, userId, mockedDatas);
};

export const getPerformanceApi = async (userId, mockedDatas) => {
  const uri = mockedDatas
    ? '/mocks/userPerformance.json'
    : `/user/${userId}/performance`;
  return await fetchData(uri, userId, mockedDatas);
};
