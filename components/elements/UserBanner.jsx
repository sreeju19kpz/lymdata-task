import { View, Text, Image, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "../../StyleSheet";
import avatar from "../../assets/avatar.png";
import { useNavigation } from "@react-navigation/native";

export default UserBanner = ({ user }) => {
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
      <Pressable
        onPress={() => navigation.navigate("Details", { id: user.id })}
        style={[
          styles.flex1,
          styles.flexDirRow,
          styles.gap10px,
          styles.aliIteCnt,
        ]}
      >
        <View style={{ overflow: "hidden", backgroundColor: "transparent" }}>
          <Image
            style={[styles.width44px, styles.height44px]}
            source={user?.dp || avatar}
          />
        </View>
        <View style={[styles.flexDirRow, styles.gap10px]}>
          <View>
            <Text style={[styles.fonSiz18, { color: "white" }]}>
              {user.name}
            </Text>
            <View style={[styles.flexDirRow, { gap: 3 }]}>
              <Text
                style={[styles.fonSiz11, { color: "rgba(255,255,255,0.5)" }]}
              >
                @
              </Text>
              <Text
                style={[
                  styles.fonSiz13,
                  styles.fonColBlaLig1,
                  { lineHeight: 18, color: "rgba(255,255,255,0.5)" },
                ]}
              >
                {user.username}
              </Text>
            </View>
          </View>
          <View>
            <Text>{user.website}</Text>
          </View>
        </View>
      </Pressable>
      {/* <Modal visible={activate} animationType="slide">
        <UserModel id={user.id} onClick={() => setActivate(!activate)} />
      </Modal> */}
    </View>
  );
};
