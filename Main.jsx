import "react-native-gesture-handler";
import {
  Animated,
  Dimensions,
  Easing,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./StyleSheet";
import Home from "./Screens/Home";
import UserModel from "./components/modals/UserModel";
import img from "./assets/blue.jpg";
const Stack = createStackNavigator();

export default function Main() {
  const SCREEN_HEIGHT = Dimensions.get("window").height;
  console.log(SCREEN_HEIGHT);
  return (
    <>
      <NavigationContainer theme={{ colors: { background: "transparent" } }}>
        <ImageBackground source={img} style={{ flex: 1 }} blurRadius={100}>
          <Stack.Navigator
            screenOptions={{
              headerShown: true,
              animationEnabled: false,
              headerStyle: {
                height: 100,
                elevation: 0,
                shadowOpacity: 0,
                backgroundColor: "transparent",
              },
              headerTintColor: "grey",
            }}
          >
            <Stack.Screen name="Home" children={() => <Home />} />
            <Stack.Screen name="Details" component={UserModel} />
          </Stack.Navigator>
        </ImageBackground>
      </NavigationContainer>
    </>
  );
}
