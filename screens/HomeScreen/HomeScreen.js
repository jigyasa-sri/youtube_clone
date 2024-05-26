import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { YTicon, SearchIcon, CastIcon, BellIcon } from "../../assets";
import Catagories from "../../components/Catagories";
import SuggestedPlay from "../../components/SuggestedPlay";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../../redux/actions";

const actions = [
  {
    id: 1,
    name: "Cast",
    icon: CastIcon,
  },
  {
    id: 2,
    name: "Bell",
    icon: BellIcon,
  },
  {
    id: 3,
    name: "Search",
    icon: SearchIcon,
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState("All");
  const { loading } = useSelector((state) => state.videos);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    dispatch(getVideos());
  }, [dispatch]);

  const handleAction = (name) => {
    if (name == "Search") {
      navigation.navigate("Search");
    } else {
      console.warn(`Action pressed: ${name}`);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-zinc-900 pt-2">
      <View className="flex-row justify-between mx-4 mt-8">
        <View className="flex-row items-center space-x-1">
          <Image source={YTicon} className="h-7 w-10" />
          <Text className="text-white text-2xl font-semibold tracking-tight">
            YouTube
          </Text>
        </View>
        <View className="flex-row items-center space-x-2">
          {actions.map(({ id, icon, name }) => (
            <TouchableOpacity key={id} onPress={() => handleAction(name)}>
              <Image source={icon} className="w-7 h-7" />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {loading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
      ) : (
        <ScrollView
          className="flex-1 mt-4"
          showsVerticalScrollIndicator={false}
        >
          <Catagories
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          <SuggestedPlay activeCategory={activeCategory} />
        </ScrollView>
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default HomeScreen;
