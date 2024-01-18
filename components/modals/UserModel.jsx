import { View, Text, Image, Modal, ScrollView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../../StyleSheet";
import avatar from "../../assets/avatar.png";
import { useGetUserMutation } from "../features/acbReports/userApiSlice";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Skeleton } from "moti/skeleton";
import UserModelSkeleton from "./UserModelSkeleton";

export default UserModel = ({ route }) => {
  const { id } = route.params;
  const [getUser, { isLoading }] = useGetUserMutation();
  const [user, setUser] = useState();
  useEffect(() => {
    const fetch = async () => {
      const data = await getUser({ id }).unwrap();
      data && setUser(data);
    };
    fetch();
  }, []);
  if (isLoading) {
    return <UserModelSkeleton />;
  }
  return (
    <>
      <ScrollView
        style={[
          styles.width100p,
          styles.pad10px,
          styles.flex1,
          { backgroundColor: "rgba(27,36,45,255)" },
        ]}
      >
        <View style={{ marginBottom: 30 }}>
          <View
            style={[
              styles.width100p,
              styles.aliIteCnt,
              styles.jusConCnt,
              { height: 300 },
            ]}
          >
            <Image
              style={[styles.width240, styles.height240]}
              source={user?.dp || avatar}
            />
          </View>
          <View style={[styles.width100p, styles.aliIteCnt]}>
            <View style={[styles.flexDirRow, { gap: 30 }]}>
              <View
                style={[
                  styles.pad10px,
                  styles.borColBlaLig,
                  styles.borWid1px,
                  styles.width44px,
                  styles.height44px,
                  {
                    borderRadius: 100,
                    padding: 3,

                    backgroundColor: "rgba(255,255,255,.7)",
                  },
                ]}
              >
                <FontAwesome
                  name="phone"
                  style={{ padding: 7, left: 2 }}
                  size={24}
                  color="rgba(255,255,255,.7)"
                />
              </View>
              <View
                style={[
                  styles.pad10px,
                  styles.borColBlaLig,
                  styles.borWid1px,
                  styles.width44px,
                  styles.height44px,
                  {
                    borderRadius: 100,

                    backgroundColor: "rgba(255,255,255,.7)",
                  },
                ]}
              >
                <MaterialCommunityIcons
                  style={{ right: 1, bottom: 2 }}
                  name="web"
                  size={24}
                  color="rgba(255,255,255,.7)"
                />
              </View>
            </View>
          </View>
          <View style={[styles.pad10px, styles.gap10px]}>
            <Text style={[styles.fonSiz18, { color: "white" }]}>name</Text>
            <View
              style={[
                styles.flexDirRow,
                styles.gap10px,
                styles.borRad10Px,
                {
                  backgroundColor: "rgba(37,49,61,255)",
                  paddingHorizontal: 10,
                  paddingVertical: 15,
                },
              ]}
            >
              <Text
                style={[styles.fonSiz18, { color: "rgba(255,255,255,.7)" }]}
              >
                {user?.name}
              </Text>
            </View>
            <Text style={[styles.fonSiz18, { color: "white" }]}>
              email address
            </Text>
            <View
              style={[
                styles.flexDirRow,
                styles.gap10px,
                styles.borRad10Px,
                {
                  backgroundColor: "rgba(37,49,61,255)",
                  paddingHorizontal: 10,
                  paddingVertical: 15,
                },
              ]}
            >
              <Text
                style={[styles.fonSiz18, { color: "rgba(255,255,255,.7)" }]}
              >
                {user?.email}
              </Text>
            </View>
            <View style={[styles.gap10px]}>
              <Text style={[styles.fonSiz18, , { color: "white" }]}>
                street :
              </Text>
              <View
                style={[
                  styles.flexDirRow,
                  styles.gap10px,
                  styles.borRad10Px,
                  {
                    backgroundColor: "rgba(37,49,61,255)",
                    paddingHorizontal: 10,
                    paddingVertical: 15,
                  },
                ]}
              >
                <Text
                  style={[styles.fonSiz18, { color: "rgba(255,255,255,.7)" }]}
                >
                  {user?.address.street}
                </Text>
              </View>
              <Text style={[styles.fonSiz18, { color: "white" }]}>suite :</Text>
              <View
                style={[
                  styles.flexDirRow,
                  styles.gap10px,
                  styles.borRad10Px,
                  {
                    backgroundColor: "rgba(37,49,61,255)",
                    paddingHorizontal: 10,
                    paddingVertical: 15,
                  },
                ]}
              >
                <Text
                  style={[styles.fonSiz18, { color: "rgba(255,255,255,.7)" }]}
                >
                  {user?.address.suite}
                </Text>
              </View>
              <Text style={[styles.fonSiz18, { color: "white" }]}>city :</Text>
              <View
                style={[
                  styles.flexDirRow,
                  styles.gap10px,
                  styles.borRad10Px,
                  {
                    backgroundColor: "rgba(37,49,61,255)",
                    paddingHorizontal: 10,
                    paddingVertical: 15,
                  },
                ]}
              >
                <Text style={[styles.fonSiz18, { color: "white" }]}>
                  {user?.address.city}
                </Text>
              </View>
              <Text style={[styles.fonSiz18, { color: "white" }]}>
                zipcode :
              </Text>
              <View
                style={[
                  styles.flexDirRow,
                  styles.gap10px,
                  styles.borRad10Px,
                  {
                    backgroundColor: "rgba(37,49,61,255)",
                    paddingHorizontal: 10,
                    paddingVertical: 15,
                  },
                ]}
              >
                <Text
                  style={[styles.fonSiz18, { color: "rgba(255,255,255,.7)" }]}
                >
                  {user?.address.zipcode}
                </Text>
              </View>
            </View>
            <View style={[styles.gap10px]}>
              <Text style={[styles.fonSiz18, { color: "white" }]}>
                comapny name
              </Text>
              <View
                style={[
                  styles.flexDirRow,
                  styles.gap10px,
                  styles.borRad10Px,
                  {
                    backgroundColor: "rgba(37,49,61,255)",
                    paddingHorizontal: 10,
                    paddingVertical: 15,
                  },
                ]}
              >
                <Text
                  style={[styles.fonSiz18, { color: "rgba(255,255,255,.7)" }]}
                >
                  {user?.company.name}
                </Text>
              </View>
              <Text style={[styles.fonSiz18, { color: "white" }]}>bs :</Text>
              <View
                style={[
                  styles.flexDirRow,
                  styles.gap10px,
                  styles.borRad10Px,
                  {
                    backgroundColor: "rgba(37,49,61,255)",
                    paddingHorizontal: 10,
                    paddingVertical: 15,
                  },
                ]}
              >
                <Text
                  style={[styles.fonSiz18, { color: "rgba(255,255,255,.7)" }]}
                >
                  {user?.company.bs}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
