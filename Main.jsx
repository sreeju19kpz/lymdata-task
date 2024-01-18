import "react-native-gesture-handler";
import {
  Animated,
  Easing,
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

const Stack = createStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <LinearGradient
        colors={["#C100D3", "#8F009C"]}
        locations={[0.0, 0.04]}
        style={[styles.flex1, { elevation: 0, shadowOpacity: 0 }]}
      >
        <BlurView
          tint="dark"
          intensity={27}
          blurReductionFactor={4}
          style={[styles.flex1, { elevation: 0, shadowOpacity: 0 }]}
        >
          <Stack.Navigator
            screenOptions={{
              animationEnabled: false,
              headerStyle: {
                backgroundColor: "rgba(27,36,45,255)",
                elevation: 0,
                shadowOpacity: 0,
              },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen name="Home" children={() => <Home />} />
            <Stack.Screen name="Details" component={UserModel} />
          </Stack.Navigator>
        </BlurView>
      </LinearGradient>
    </NavigationContainer>
  );
}
