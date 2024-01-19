import { FlatList, RefreshControl, ScrollView, Text, View } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useGetAllUsersMutation } from "../components/features/acbReports/userApiSlice";
import { styles } from "../StyleSheet";
import UserBanner from "../components/elements/UserBanner";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { save, selectCurrentUsers } from "../components/features/users/users";
import UserBannerSkeleton from "../components/elements/UserBannerSkeleton";
import { useSharedValue } from "react-native-reanimated";

export default Home = () => {
  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  const dispatch = useDispatch();
  const savedUsers = useSelector(selectCurrentUsers);
  const [allUsers, setAllUsers] = useState(null);
  const [getAllUsers, { isLoading }] = useGetAllUsersMutation();
  const [refreshing, setRefreshing] = useState(false);
  const viewableItemss = useSharedValue([]);

  const onViewableItemsChanged = ({ viewableItems: items }) => {
    viewableItemss.value = items;
  };

  // 2. create a reference to the function (above)
  const viewabilityConfigCallbackPairs = useRef([{ onViewableItemsChanged }]);

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

  const refresh = async () => {
    setRefreshing(true);
    await sleep(3000);
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
    setRefreshing(false);
  };

  if (refreshing || (isLoading && !allUsers && !savedUsers)) {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }
        scrollEventThrottle={16}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.flexDirRow,
          { backgroundColor: "transparent", flexWrap: "wrap" },
        ]}
      >
        {Array.from({ length: 8 }).map((_, i) => {
          return <UserBannerSkeleton key={i} />;
        })}
      </ScrollView>
    );
  }
  if (!refreshing && isLoading && savedUsers) {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }
        scrollEventThrottle={16}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.flexDirRow,
          { backgroundColor: "transparent", flexWrap: "wrap" },
        ]}
      >
        {savedUsers?.map((item, i) => {
          return <UserBanner key={i} user={item} />;
        })}
      </ScrollView>
    );
  }
  if (!refreshing && isLoading && !savedUsers && allUsers) {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }
        scrollEventThrottle={16}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.flexDirRow,
          { backgroundColor: "transparent", flexWrap: "wrap" },
        ]}
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
        contentContainerStyle={[
          styles.flexDirRow,
          { backgroundColor: "transparent", flexWrap: "wrap" },
        ]}
      >
        {savedUsers?.map((item, i) => {
          return <UserBanner key={i} user={item} />;
        })}
      </ScrollView>
    );
  }
  return (
    <>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }
        scrollEventThrottle={16}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "transparent" }}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        contentContainerStyle={[{ backgroundColor: "transparent" }]}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        numColumns={2}
        data={allUsers}
        renderItem={({ item, index }) => {
          return (
            <UserBanner
              user={item}
              index={index}
              key={index}
              viewableItems={viewableItemss}
            />
          );
        }}
      />
    </>
  );
};
/*   <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }
        scrollEventThrottle={16}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "transparent" }}
        contentContainerStyle={[
          styles.flexDirRow,
          { backgroundColor: "transparent", flexWrap: "wrap" },
        ]}
      >
        {allUsers?.map((item, i) => {
          return <UserBanner key={i} user={item} />;
        })}
      </ScrollView> */
