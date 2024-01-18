import { RefreshControl, ScrollView, Text, View } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useGetAllUsersMutation } from "../components/features/acbReports/userApiSlice";
import { styles } from "../StyleSheet";
import UserBanner from "../components/elements/UserBanner";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { save, selectCurrentUsers } from "../components/features/users/users";

export default Home = () => {
  const dispatch = useDispatch();
  const savedUsers = useSelector(selectCurrentUsers);
  const [allUsers, setAllUsers] = useState(null);
  const [getAllUsers, { isLoading }] = useGetAllUsersMutation();
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {});
  useEffect(() => {
    const fetch = async () => {
      const data = await getAllUsers().unwrap();
      /*   data && setAllUsers(data);
      data &&
        dispatch(
          save({
            users: data.map((item) => {
              return {
                id: item.id,
                dp: item.dp,
                name: item.name,
                username: item.username,
                website: item.website,
              };
            }),
          })
        ); */
    };
    fetch();
  }, []);

  const refresh = () => {
    console.log(1);
  };
  if (isLoading && !savedUsers && !allUsers) {
    return (
      <View>
        <Text>loading</Text>
      </View>
    );
  }
  if (isLoading && savedUsers) {
    return (
      <LinearGradient
        colors={["#8F009C", "#000000"]}
        locations={[0, 0.1]}
        style={styles.flex1}
      >
        <BlurView
          tint="dark"
          intensity={30}
          blurReductionFactor={10}
          style={[styles.flex1]}
        >
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={refresh} />
            }
            scrollEventThrottle={16}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[styles.pad10px, styles.gap10px]}
          >
            {savedUsers?.map((item, i) => {
              return <UserBanner key={i} user={item} />;
            })}
          </ScrollView>
        </BlurView>
      </LinearGradient>
    );
  }
  if (isLoading && !savedUsers && allUsers) {
    return (
      <LinearGradient
        colors={["#8F009C", "#000000"]}
        locations={[0, 0.1]}
        style={styles.flex1}
      >
        <BlurView
          tint="dark"
          intensity={30}
          blurReductionFactor={10}
          style={[styles.flex1]}
        >
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={refresh} />
            }
            scrollEventThrottle={16}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[styles.pad10px, styles.gap10px]}
          >
            {allUsers?.map((item, i) => {
              return <UserBanner key={i} user={item} />;
            })}
          </ScrollView>
        </BlurView>
      </LinearGradient>
    );
  }
  if (!isLoading && !allUsers && savedUsers) {
    return (
      <LinearGradient
        colors={["#8F009C", "#000000"]}
        locations={[0, 0.1]}
        style={styles.flex1}
      >
        <BlurView
          tint="dark"
          intensity={30}
          blurReductionFactor={10}
          style={[styles.flex1]}
        >
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={refresh} />
            }
            scrollEventThrottle={16}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[styles.pad10px, styles.gap10px]}
          >
            {savedUsers?.map((item, i) => {
              return <UserBanner key={i} user={item} />;
            })}
          </ScrollView>
        </BlurView>
      </LinearGradient>
    );
  }
  return (
    <LinearGradient
      colors={["#8F009C", "#000000"]}
      locations={[0, 0.1]}
      style={styles.flex1}
    >
      <BlurView
        tint="dark"
        intensity={30}
        blurReductionFactor={10}
        style={[styles.flex1]}
      >
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={refresh} />
          }
          scrollEventThrottle={16}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.pad10px, styles.gap10px]}
        >
          {allUsers?.map((item, i) => {
            return <UserBanner key={i} user={item} />;
          })}
        </ScrollView>
      </BlurView>
    </LinearGradient>
  );
};
