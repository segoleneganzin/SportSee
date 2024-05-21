/**
 * Asynchronous function to fetch data from an endpoint (local when datas are mocked or api).
 * @param {string} endpoint - The endpoint URL to fetch data from.
 * @param {number} userId - The ID of the user for whom data is being fetched.
 * @param {boolean} mockedDatas - Boolean indicating whether the data is mocked or not.
 * @returns {Promise<any>} - A Promise that resolves to the fetched data or an error.
 */
export const fetchData = async (endpoint, userId, mockedDatas) => {
  try {
    const response = await fetch(endpoint);
    let data = await response.json();
    // console.log('Origine des données : ' + endpoint);
    if (mockedDatas) {
      // depending on the endpoint, this may be id or userId
      data = data.find((user) => user.id === userId || user.userId === userId); // filter datas and get datas correspond to userID
    }
    if (!data) {
      throw new Error('User data not found');
    }
    return mockedDatas ? data : data.data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
