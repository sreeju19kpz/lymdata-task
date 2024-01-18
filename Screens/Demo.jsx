// AnimatedTitleBar.js

import React, { useRef } from "react";
import { View, Text, Animated, StyleSheet, ScrollView } from "react-native";

const AnimatedTitleBar = ({ route, navigation }) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const titleHeight = 40; // You can adjust this according to your design

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.titleBar,
          {
            height: scrollY.interpolate({
              inputRange: [0, titleHeight],
              outputRange: [titleHeight, 20], // Adjust the final height as needed
              extrapolate: "clamp",
            }),
          },
        ]}
      >
        <Text style={styles.titleText}>{route.name}</Text>
      </Animated.View>
      <ScrollView
        style={styles.scrollView}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        {/* Your Stack Navigator Screens */}
        <View style={styles.screenContainer}>
          {/* Screen Content */}
          {/* Add your screen content here */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleBar: {
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  titleText: {
    color: "white",
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
    marginTop: 40, // Adjust the marginTop based on your final title bar height
  },
  screenContainer: {
    padding: 16,
  },
});

export default AnimatedTitleBar;
