import { View, Text, Image, ScrollView, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../../StyleSheet";
import avatar from "../../assets/avatar.png";
import { useGetUserMutation } from "../features/acbReports/userApiSlice";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import UserModelSkeleton from "./UserModelSkeleton";

export default UserModel = ({ route }) => {
  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  const { id } = route.params;
  const [getUser, { isLoading }] = useGetUserMutation();
  const [user, setUser] = useState();
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      const data = await getUser({ id }).unwrap();
      data && setUser(data);
    };
    fetch();
  }, []);

  const refresh = async () => {
    setRefreshing(true);
    await sleep(3000);
    const data = await getUser({ id }).unwrap();
    data && setUser(data);
    setRefreshing(false);
  };
  if (refreshing || isLoading) {
    return <UserModelSkeleton />;
  }
  return (
    <>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }
        style={[styles.width100p, styles.pad10px, styles.flex1]}
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

                    backgroundColor: "rgba(0,0,0,.3)",
                  },
                ]}
              >
                <FontAwesome
                  name="phone"
                  style={{ padding: 7, left: 2 }}
                  size={24}
                  color="white"
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

                    backgroundColor: "rgba(0,0,0,.3)",
                  },
                ]}
              >
                <MaterialCommunityIcons
                  style={{ right: 1, bottom: 2 }}
                  name="web"
                  size={24}
                  color="white"
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
                styles.borColBlaLig,
                styles.borWid1px,
                {
                  paddingHorizontal: 10,
                  paddingVertical: 15,
                  backgroundColor: "white",
                },
              ]}
            >
              <Text style={[styles.fonSiz18]}>{user?.name}</Text>
            </View>
            <Text style={[styles.fonSiz18, , { color: "white" }]}>
              email address
            </Text>
            <View
              style={[
                styles.flexDirRow,
                styles.gap10px,
                styles.borRad10Px,
                styles.borColBlaLig,
                styles.borWid1px,
                {
                  paddingHorizontal: 10,
                  paddingVertical: 15,
                  backgroundColor: "white",
                },
              ]}
            >
              <Text style={[styles.fonSiz18]}>{user?.email}</Text>
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
                  styles.borColBlaLig,
                  styles.borWid1px,
                  {
                    paddingHorizontal: 10,
                    paddingVertical: 15,
                    backgroundColor: "white",
                  },
                ]}
              >
                <Text style={[styles.fonSiz18]}>{user?.address.street}</Text>
              </View>
              <Text style={[styles.fonSiz18, { color: "white" }]}>suite :</Text>
              <View
                style={[
                  styles.flexDirRow,
                  styles.gap10px,
                  styles.borRad10Px,
                  styles.borColBlaLig,
                  styles.borWid1px,
                  {
                    paddingHorizontal: 10,
                    paddingVertical: 15,
                    backgroundColor: "white",
                  },
                ]}
              >
                <Text style={[styles.fonSiz18]}>{user?.address.suite}</Text>
              </View>
              <Text style={[styles.fonSiz18, { color: "white" }]}>city :</Text>
              <View
                style={[
                  styles.flexDirRow,
                  styles.gap10px,
                  styles.borRad10Px,
                  styles.borColBlaLig,
                  styles.borWid1px,
                  {
                    paddingHorizontal: 10,
                    paddingVertical: 15,
                    backgroundColor: "white",
                  },
                ]}
              >
                <Text style={[styles.fonSiz18]}>{user?.address.city}</Text>
              </View>
              <Text style={[styles.fonSiz18, { color: "white" }]}>
                zipcode :
              </Text>
              <View
                style={[
                  styles.flexDirRow,
                  styles.gap10px,
                  styles.borRad10Px,
                  styles.borColBlaLig,
                  styles.borWid1px,
                  {
                    paddingHorizontal: 10,
                    paddingVertical: 15,
                    backgroundColor: "white",
                  },
                ]}
              >
                <Text style={[styles.fonSiz18]}>{user?.address.zipcode}</Text>
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
                  styles.borColBlaLig,
                  styles.borWid1px,
                  {
                    paddingHorizontal: 10,
                    paddingVertical: 15,
                    backgroundColor: "white",
                  },
                ]}
              >
                <Text style={[styles.fonSiz18]}>{user?.company.name}</Text>
              </View>
              <Text style={[styles.fonSiz18, { color: "white" }]}>bs :</Text>
              <View
                style={[
                  styles.flexDirRow,
                  styles.gap10px,
                  styles.borRad10Px,
                  styles.borColBlaLig,
                  styles.borWid1px,
                  {
                    paddingHorizontal: 10,
                    paddingVertical: 15,
                    backgroundColor: "white",
                  },
                ]}
              >
                <Text style={[styles.fonSiz18]}>{user?.company.bs}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
