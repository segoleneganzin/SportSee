// read
export const fetchData = async (endpoint, userId, mockedDatas) => {
  if (!endpoint) return;
  console.log(endpoint);
  try {
    const response = await fetch(endpoint);
    let data = await response.json();
    if (mockedDatas) {
      data = data.find((user) => user.id === userId || user.userId === userId);
    }
    return mockedDatas ? data : data.data;
  } catch (err) {
    console.log(err);
  }
};
