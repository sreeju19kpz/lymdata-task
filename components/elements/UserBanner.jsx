import { View, Text, Image, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "../../StyleSheet";
import avatar from "../../assets/avatar.png";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
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
        onPress={() => navigation.navigate("Details", { id: user.id })}
        style={[styles.flexDirRow, styles.aliIteCnt, { width: 300, gap: 30 }]}
      >
        <View style={{ overflow: "hidden", backgroundColor: "transparent" }}>
          <Image
            style={{ width: 80, height: 80 }}
            source={user?.dp || avatar}
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
          <View>
            <Text style={[styles.fonSiz18, { color: "rgba(255,255,255,.8)" }]}>
              {user.name}
            </Text>
            <View style={[styles.flexDirRow, { gap: 3 }]}>
              <Text
                style={[styles.fonSiz11, { color: "rgba(255,255,255,.8)" }]}
              >
                @
              </Text>
              <Text
                style={[
                  styles.fonSiz13,
                  styles.fonColBlaLig1,
                  ,
                  { lineHeight: 18, color: "rgba(255,255,255,.8)" },
                ]}
              >
                {user.username}
              </Text>
            </View>
          </View>
          <View style={[styles.width100p]}>
            <View style={[styles.flexDirRow, { gap: 10 }]}>
              <View
                style={[
                  styles.pad10px,
                  styles.borColBlaLig,
                  styles.borWid1px,
                  styles.aliIteCnt,
                  styles.jusConCnt,
                  {
                    borderRadius: 100,
                    padding: 3,
                    height: 30,
                    width: 30,
                    backgroundColor: "#fc2266",
                  },
                ]}
              >
                <FontAwesome name="phone" size={16} color="white" />
              </View>
              <View
                style={[
                  styles.pad10px,
                  styles.borColBlaLig,
                  styles.borWid1px,
                  styles.width44px,
                  styles.height44px,
                  styles.aliIteCnt,
                  styles.jusConCnt,
                  {
                    borderRadius: 100,
                    padding: 3,
                    height: 30,
                    width: 30,
                    backgroundColor: "#fc2266",
                  },
                ]}
              >
                <MaterialCommunityIcons name="web" size={16} color="white" />
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};
