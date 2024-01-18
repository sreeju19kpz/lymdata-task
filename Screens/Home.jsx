import { RefreshControl, ScrollView, Text, View } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useGetAllUsersMutation } from "../components/features/acbReports/userApiSlice";
import { styles } from "../StyleSheet";
import UserBanner from "../components/elements/UserBanner";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { save, selectCurrentUsers } from "../components/features/users/users";
import UserBannerSkeleton from "../components/elements/UserBannerSkeleton";

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
      data && setAllUsers(data);
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
        );
    };
    fetch();
  }, []);

  const refresh = () => {
    console.log(1);
  };
  if (isLoading && !allUsers && !savedUsers) {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }
        scrollEventThrottle={16}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.pad10px, styles.gap10px]}
      >
        {Array.from({ length: 8 }).map((_, i) => {
          return <UserBannerSkeleton key={i} />;
        })}
      </ScrollView>
    );
  }
  if (isLoading && savedUsers) {
    return (
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
    );
  }
  if (isLoading && !savedUsers && allUsers) {
    return (
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
    );
  }
  if (!isLoading && !allUsers && savedUsers) {
    return (
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
    );
  }
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refresh} />
      }
      scrollEventThrottle={16}
      scrollEnabled={true}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        styles.pad10px,
        styles.gap10px,
        { backgroundColor: "rgba(27,36,45,255)" },
      ]}
    >
      {allUsers?.map((item, i) => {
        return <UserBanner key={i} user={item} />;
      })}
    </ScrollView>
  );
};
