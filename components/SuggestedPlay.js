import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import filterDataByCategory from "../helper/filterData";
import VideoCard from "./VideoCard";

const SuggestedPlay = ({ activeCategory }) => {
  const { videos } = useSelector((state) => state.videos);
  const [data, setData] = useState([]);

  useEffect(() => {
    const result = filterDataByCategory(videos, activeCategory);
    setData(result);
  }, [videos, activeCategory]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {data &&
        data.map((item, index) => <VideoCard video={item} key={index} />)}
    </ScrollView>
  );
};

export default SuggestedPlay;
