import { View, Text, Image, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "../../StyleSheet";
import avatar from "../../assets/avatar.png";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Skeleton } from "moti/skeleton";
export default UserBanner = ({ user }) => {
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.width100p,
        styles.height75px,
        styles.flexDirRow,
        styles.aliIteCnt,
        styles.jusConCnt,
        styles.pad10px,

        {
          backgroundColor: "transparent",
          height: 150,
        },
      ]}
    >
      <Pressable
        onPress={() => navigation.navigate("Details", { id: user?.id })}
        style={[styles.flexDirRow, styles.aliIteCnt, { width: 300, gap: 30 }]}
      >
        <View style={{ overflow: "hidden", backgroundColor: "transparent" }}>
          <Skeleton
            width={80}
            height={80}
            radius={"round"}
            colorMode="dark"
            transition={{
              type: "timing",
              duration: 1000,
            }}
          />
        </View>
        <View
          style={[
            styles.gap10px,
            {
              height: "100%",
              justifyContent: "space-around",
              paddingVertical: 20,
            },
          ]}
        >
          <View style={{ gap: 5 }}>
            <Skeleton
              width={100}
              height={15}
              radius={"round"}
              colorMode="dark"
              transition={{
                type: "timing",
                duration: 1000,
              }}
            />

            <Skeleton
              width={100}
              height={10}
              radius={"round"}
              colorMode="dark"
              transition={{
                type: "timing",
                duration: 1000,
              }}
            />
          </View>
          <View style={[styles.width100p]}>
            <View style={[styles.flexDirRow, { gap: 10 }]}>
              <Skeleton
                width={30}
                height={30}
                radius={"round"}
                colorMode="dark"
                transition={{
                  type: "timing",
                  duration: 1000,
                }}
              />
              <Skeleton
                width={30}
                height={30}
                radius={"round"}
                colorMode="dark"
                transition={{
                  type: "timing",
                  duration: 1000,
                }}
              />
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};
