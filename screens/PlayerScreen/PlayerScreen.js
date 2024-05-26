import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";
import React, { useLayoutEffect, useState, useRef } from "react";
import { Image, TouchableOpacity, View, Text, ScrollView } from "react-native";
import { LeftIcon } from "../../assets";
import { Video, ResizeMode } from "expo-av";
import VideoPlayer from "expo-video-player";

const PlayerScreen = () => {
  const navigation = useNavigation();
  const selectedVideo = useSelector((state) => state.videos.selectedVideo);
  console.log(selectedVideo.url);

  const ref = useRef(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 pt-2 bg-black h-4/6"
    >
      <View className="flex-row">
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image source={LeftIcon} className="h-7 w-7 items-center" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="">
        <VideoPlayer
          videoProps={{
            shouldPlay: true,
            resizeMode: ResizeMode.CONTAIN,
            source: {
              uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            },
          }}
        />
      </TouchableOpacity>
      <Text className="text-white fonst-bold text-2xl px-2">
        {selectedVideo.p_name}
      </Text>
      <Text className="text-white fonst-semi-bold text-lg px-2">
        {selectedVideo.p_desc}
      </Text>
      <StatusBar style="auto" />
    </ScrollView>
  );
};

export default PlayerScreen;
