import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SplashScreen from "./screens/SplashScreen";
import SearchScreen from "./screens/SearchScreen";
import PlayerScreen from "./screens/PlayerScreen";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 4000);
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={showSplash ? "Splash" : "Home"}
            component={showSplash ? SplashScreen : HomeScreen}
          />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Player" component={PlayerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
