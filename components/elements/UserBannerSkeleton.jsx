import { View, Text, Image, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "../../StyleSheet";
import avatar from "../../assets/avatar.png";
import { useNavigation } from "@react-navigation/native";
import { Skeleton } from "moti/skeleton";

export default UserBannerSkeleton = () => {
  const navigation = useNavigation();
  const [activate, setActivate] = useState(false);
  return (
    <View
      style={[
        styles.width100p,
        styles.height75px,
        styles.flexDirRow,
        styles.gap10px,
        styles.aliIteCnt,
        styles.pad10px,
        styles.borWid1px,
        styles.borColBlaLig,
        styles.borRad10Px,

        {
          backgroundColor: "rgba(0,0,0,.7)",
        },
      ]}
    >
      <View
        style={[
          styles.flex1,
          styles.flexDirRow,
          styles.gap10px,
          styles.aliIteCnt,
        ]}
      >
        <View style={{ overflow: "hidden", backgroundColor: "transparent" }}>
          <Skeleton
            width={44}
            height={44}
            radius={"round"}
            transition={{
              type: "timing",
              duration: 1000,
            }}
          />
        </View>
        <View style={[styles.flexDirRow, styles.gap10px]}>
          <View style={[styles.gap10px]}>
            <Skeleton
              width={200}
              height={14}
              radius={"round"}
              transition={{
                type: "timing",
                duration: 1000,
              }}
            />
            <View style={[styles.flexDirRow, { gap: 3 }]}>
              <Skeleton
                width={150}
                height={8}
                radius={"round"}
                transition={{
                  type: "timing",
                  duration: 1000,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
