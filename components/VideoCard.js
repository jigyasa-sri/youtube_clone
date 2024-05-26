import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { UserIcon } from "../assets";
import { useDispatch } from "react-redux";
import { setSelectedVideo } from "../redux/reducers";

const VideoCard = ({ video }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleVideoPlayer = () => {
    dispatch(setSelectedVideo(video));
    navigation.navigate("Player");
  };

  return (
    <TouchableOpacity onPress={handleVideoPlayer}>
      <Image source={{ uri: video.p_image }} className="h-52 w-full" />
      <View className="flex-row justify-between items-center pb-5 space-x-3 mx-2">
        <Image source={UserIcon} className="h-9 w-9" />
        <View className="flex-1 space-y-1 mt-1">
          <Text className="text-white">{video.p_name}</Text>
          <Text className="text-zinc-400 text-sm">{video.cat_name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VideoCard;
