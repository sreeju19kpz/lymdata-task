import { View, Text } from "react-native";
import React from "react";
import * as SecureStore from "expo-secure-store";
import { save, saveFromDisk } from "../../features/users/users";

export const saveUsersStore = (store) => (next) => async (action) => {
  if (action.type === save.type) {
    const { users } = action.payload;
    await SecureStore.setItemAsync("users", JSON.stringify({ users })).catch(
      (error) => {
        console.error("Error saving token to secure store:", error);
      }
    );
  }
  return next(action);
};

export const loadUsersStore = async (dispatch) => {
  try {
    const users = await SecureStore.getItemAsync("users");
    if (users) {
      dispatch(saveFromDisk(JSON.parse(users)));
    }
  } catch (error) {
    console.error("Error loading token from secure store:", error);
  }
};
