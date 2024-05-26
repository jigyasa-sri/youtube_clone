const extractObjectsAndKeys = (data) => {
  const allVideos = [];
  const videoCatagory = ["All"];

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      videoCatagory.push(key);
      allVideos.push(...data[key]);
    }
  }

  return { allVideos, videoCatagory };
};

export default extractObjectsAndKeys;
