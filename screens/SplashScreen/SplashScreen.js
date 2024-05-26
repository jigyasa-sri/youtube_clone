import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect } from "react";
import * as Animatable from "react-native-animatable";
import { Image, SafeAreaView, View } from "react-native";
import { YTicon } from "../../assets";

const SplashScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-zinc-900">
      <View className="flex-row items-center space-x-3">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          duration={2000}
          source={YTicon}
          className="h-20 w-20"
        />
        <Animatable.Text
          animation="fadeIn"
          easing="ease-in-out"
          delay={300}
          duration={1700}
          className="text-white text-3xl font-semibold tracking-tight"
        >
          YouTube
        </Animatable.Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default SplashScreen;
