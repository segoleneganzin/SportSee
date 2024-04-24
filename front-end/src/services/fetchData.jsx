export const fetchData = async (uri, userId, mockedDatas) => {
  if (!uri) return;
  const domain = mockedDatas
    ? 'http://localhost:5173'
    : 'http://localhost:3000';
  const url = domain + uri;
  console.log(url);
  try {
    const response = await fetch(url);
    let data = await response.json();
    if (mockedDatas) {
      data = data.find((user) => user.userId === userId);
    }
    return mockedDatas ? data : data.data;
  } catch (err) {
    console.log(err);
  }
};
