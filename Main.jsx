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
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { HeaderBackButton } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function Main() {
  const SCREEN_HEIGHT = Dimensions.get("window").height;
  console.log(SCREEN_HEIGHT);
  return (
    <>
      <NavigationContainer theme={{ colors: { background: "transparent" } }}>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            animationEnabled: false,
            headerTitleAlign: "center",

            headerRight: () => (
              <View style={{ padding: 5, flexDirection: "row", gap: 10 }}>
                <Ionicons name="search-outline" size={24} color="#3F00FF" />
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="#3F00FF"
                />
              </View>
            ),
            headerStyle: {
              height: 100,
              elevation: 0,
              shadowOpacity: 0,
              backgroundColor: "transparent",
            },
            headerTintColor: "#3F00FF",
          }}
        >
          <Stack.Screen
            name="Home"
            options={{
              headerLeft: () => (
                <>
                  <Entypo
                    style={{ padding: 5 }}
                    name="menu"
                    size={24}
                    color="#3F00FF"
                  />
                </>
              ),
            }}
            children={() => <Home />}
          />
          <Stack.Screen name="Details" component={UserModel} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
