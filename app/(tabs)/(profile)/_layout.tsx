import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return <Stack >
    <Stack.Screen name="ProfilePage" options={{
      headerShown:false
    }} />
    <Stack.Screen name="NotificationPage" options={{
      headerShown:false
    }} />
  </Stack>
};

export default Layout;
