import classNames from "classnames";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import extractObjectsAndKeys from "../helper/seperateKeyAndObject";

const Catagories = ({ activeCategory, setActiveCategory }) => {
  const [categories, setCategories] = useState([]);
  const { videos } = useSelector((state) => state.videos);

  useEffect(() => {
    if (videos) {
      const { videoCatagory } = extractObjectsAndKeys(videos);
      setCategories(videoCatagory);
    }
  }, [videos]);

  return (
    <View className="py-2 pb-5">
      <ScrollView
        className="px-4"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {categories.length > 1 &&
          categories.map((category, index) => {
            let isActive = category == activeCategory;
            return (
              <TouchableOpacity
                key={index}
                className={classNames("rounded-md p-1 px-3 mr-2 bg-zinc-700 ", {
                  "bg-white": isActive,
                })}
                onPress={() => setActiveCategory(category)}
              >
                <Text
                  className={classNames("text-white", {
                    "text-black": isActive,
                  })}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Catagories;
