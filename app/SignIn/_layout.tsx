import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return <Stack >
    <Stack.Screen name="SignInScreen" options={{
      headerShown:false
    }} />
    <Stack.Screen name="ForgetPass" options={{
      headerShown:false
    }} />
  </Stack>
};

export default Layout;
