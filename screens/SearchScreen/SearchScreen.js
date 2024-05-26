import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect } from "react";
import {
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LeftIcon } from "../../assets";

const SearchScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 pt-2 bg-zinc-900">
      <View className="flex-row items-center mt-8 mx-2">
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image source={LeftIcon} className="h-7 w-7 items-center" />
        </TouchableOpacity>
        <TextInput
          clearButtonMode="while-editing"
          placeholder="Search YouTube"
          className="grow bg-zinc-700 py-2 px-4 placeholder:text-xl text-white border-2 border-zinc-800 rounded-3xl "
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
