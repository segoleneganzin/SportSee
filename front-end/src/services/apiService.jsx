import { formatData } from './FormatData';
export const apiService = () => {
  const mockedDatas = true;
  // const domain = 'http://localhost:3000';
  const domain = 'http://localhost:5173';

  const getUserById = (userId) => {
    // const uri = `/user/${userId}`;
    const uri = '/mocks/user.json';
    return formatData(mockedDatas, domain + uri, userId);
  };

  const getUserActivity = (userId) => {
    // const uri = `/user/${userId}/activity`;
    const uri = '/mocks/userActivity.json';
    return formatData(mockedDatas, domain + uri, userId);
  };

  const getUserAverageSessions = (userId) => {
    // const uri = `/user/${userId}/average-session`;
    const uri = '/mocks/userAverageSession.json';
    return formatData(mockedDatas, domain + uri, userId);
  };

  const getUserPerformance = (userId) => {
    // const uri =`/user/${userId}/performance`;
    const uri = '/mocks/userPerformance.json';
    return formatData(mockedDatas, domain + uri, userId);
  };

  return {
    getUserById,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance,
  };
};
