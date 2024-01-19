import { View, Text, Image, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "../../StyleSheet";
import avatar from "../../assets/avatar.png";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default UserBanner = React.memo(({ user }) => {
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.flexDirRow,
        styles.jusConCnt,
        {
          backgroundColor: "transparent",
          height: 230,
          padding: 5,
          width: "50%",

          zIndex: 1,
        },
      ]}
    >
      <Pressable
        onPress={() => navigation.navigate("Details", { id: user.id })}
        style={[
          styles.aliIteCnt,
          styles.borRad10Px,
          {
            width: "100%",
            backgroundColor: "white",
            justifyContent: "space-between",
            elevation: 10,
            shadowColor: "#36454F",
          },
        ]}
      >
        <View>
          <View
            style={[
              styles.aliIteCnt,
              styles.pad10px,
              { overflow: "hidden", backgroundColor: "transparent" },
            ]}
          >
            <Image
              style={{ width: 80, height: 80 }}
              source={user?.dp || avatar}
            />
          </View>
          <View
            style={[
              styles.gap10px,
              {
                paddingVertical: 10,
                width: "80%",
                alignItems: "center",
              },
            ]}
          >
            <View>
              <Text
                numberOfLines={1}
                style={[styles.fonSiz18, { textAlign: "center" }]}
              >
                {user.name}
              </Text>
              <View style={[styles.flexDirRow, { gap: 3 }]}>
                <Text style={[styles.fonSiz11, styles.fonColBlaLig1]}>@</Text>
                <Text
                  style={[
                    styles.fonSiz13,
                    styles.fonColBlaLig1,
                    ,
                    { lineHeight: 18 },
                  ]}
                >
                  {user.username}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.width100p,
            styles.aliIteCnt,
            styles.jusConCnt,
            { padding: 10 },
          ]}
        >
          <View
            style={[
              styles.flexDirRow,
              styles.aliIteCnt,
              styles.jusConCnt,

              { gap: 10 },
            ]}
          >
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
      </Pressable>
    </View>
  );
});
