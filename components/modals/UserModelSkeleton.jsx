import { View, Text, Image, Modal, ScrollView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../../StyleSheet";
import avatar from "../../assets/avatar.png";
import { useGetUserMutation } from "../features/acbReports/userApiSlice";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Skeleton } from "moti/skeleton";

export default UserModel = () => {
  return (
    <>
      <View style={[styles.width100p, styles.pad10px, styles.flex1]}>
        <View style={{ marginBottom: 30 }}>
          <View
            style={[
              styles.width100p,
              styles.aliIteCnt,
              styles.jusConCnt,
              { height: 300 },
            ]}
          >
            <Skeleton
              colorMode="dark"
              width={240}
              height={240}
              radius={"round"}
              transition={{
                type: "timing",
                duration: 1000,
              }}
            />
          </View>
          <View style={[styles.width100p, styles.aliIteCnt]}>
            <View style={[styles.flexDirRow, { gap: 30 }]}>
              <Skeleton
                colorMode="dark"
                width={47}
                height={47}
                radius={"round"}
                transition={{
                  type: "timing",
                  duration: 1000,
                }}
              />
              <Skeleton
                colorMode="dark"
                width={47}
                height={47}
                radius={"round"}
                transition={{
                  type: "timing",
                  duration: 1000,
                }}
              />
            </View>
          </View>
          <View style={[styles.pad10px, styles.gap10px]}>
            <Skeleton
              colorMode="dark"
              width={200}
              height={28}
              radius={"round"}
              transition={{
                type: "timing",
                duration: 1000,
              }}
            />
            <Skeleton
              colorMode="dark"
              width={"100%"}
              height={50}
              radius={"round"}
              transition={{
                type: "timing",
                duration: 1000,
              }}
            />
            <Skeleton
              colorMode="dark"
              width={200}
              height={28}
              radius={"round"}
              transition={{
                type: "timing",
                duration: 1000,
              }}
            />
            <Skeleton
              colorMode="dark"
              width={"100%"}
              height={50}
              radius={"round"}
              transition={{
                type: "timing",
                duration: 1000,
              }}
            />
            <Skeleton
              colorMode="dark"
              width={200}
              height={28}
              radius={"round"}
              transition={{
                type: "timing",
                duration: 1000,
              }}
            />
            <Skeleton
              colorMode="dark"
              width={"100%"}
              height={50}
              radius={"round"}
              transition={{
                type: "timing",
                duration: 1000,
              }}
            />
            <Skeleton
              colorMode="dark"
              width={200}
              height={28}
              radius={"round"}
              transition={{
                type: "timing",
                duration: 1000,
              }}
            />
            <Skeleton
              colorMode="dark"
              width={"100%"}
              height={50}
              radius={"round"}
              transition={{
                type: "timing",
                duration: 1000,
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
};
