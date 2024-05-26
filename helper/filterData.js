import extractObjectsAndKeys from "./seperateKeyAndObject";

const filterDataByCategory = (data, activeCategory) => {
  if (activeCategory === "All") {
    return extractObjectsAndKeys(data).allVideos;
  } else {
    return data[activeCategory] || [];
  }
};

export default filterDataByCategory;
