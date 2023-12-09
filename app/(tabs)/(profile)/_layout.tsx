import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return <Stack >
    <Stack.Screen name="ProfilePage" options={{
      headerShown:false
    }} />
    <Stack.Screen name="Notification" options={{
      headerShown:false
    }} />
  </Stack>
};

export default Layout;
