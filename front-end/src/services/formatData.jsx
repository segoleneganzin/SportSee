/* eslint-disable react-hooks/rules-of-hooks */
import { useFetch } from '../hooks/useFetch';
export const formatData = (mockedDatas, endpoint, userId) => {
  const { data, isLoading, error } = useFetch(endpoint);
  let formattedDatas;
  // TODO gérer le formattage
  if (mockedDatas) {
    const filteredDatas = data.filter((item) => item.userId === userId);
    formattedDatas = filteredDatas;
  } else {
    formattedDatas = data;
  }

  return { data: formattedDatas, isLoading, error };
};
