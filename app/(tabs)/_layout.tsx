import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#00d6d8",
        tabBarItemStyle: { borderTopColor: "#00d6d8", borderTopWidth: 2 },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={15} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "Search",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="search" size={15} color={color} />
          ),
          tabBarItemStyle: {
            borderTopColor: "#00d6d8",
            borderTopWidth: 0,
          },
        }}
      />

      <Tabs.Screen
        name="(profile)"
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ size, color }) => (
            <Image
              source={{
                uri: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41-TmRZP71L._SY445_SX342_.jpg",
              }}
              style={styles.profileImage}
            />
          ),
          tabBarItemStyle: {
            borderTopColor: "#00d6d8",
            borderTopWidth: 0,
          },
        }}
      />
    </Tabs>
  );
};

export default Layout;

const styles = StyleSheet.create({
  profileImage: {
    width: 20,
    height: 20,
    borderRadius: 40,
  },
});
