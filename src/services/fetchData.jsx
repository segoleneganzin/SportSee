/**
 * Asynchronous function to fetch data from an endpoint (local when datas are mocked or api).
 * @param {string} endpoint - The endpoint URL to fetch data from.
 * @param {number} userId - The ID of the user for whom data is being fetched.
 * @param {boolean} mockedDatas - Boolean indicating whether the data is mocked or not.
 * @returns {Promise<any>} - A Promise that resolves to the fetched data or an error.
 */
export const fetchData = async (endpoint, userId, mockedDatas) => {
  if (!endpoint) return;
  console.log(endpoint);
  try {
    const response = await fetch(endpoint);
    let data = await response.json();
    if (mockedDatas) {
      data = data.find((user) => user.id === userId || user.userId === userId); // filter datas and get datas correspond to userID
    }
    return mockedDatas ? data : data.data;
  } catch (err) {
    console.log(err);
  }
};
