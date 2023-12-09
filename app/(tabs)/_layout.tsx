import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import userData from "../../user-data.json"


const Tab = createMaterialBottomTabNavigator();
const user = userData[0];

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#00d6d8",
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ focused, color }: { focused: boolean; color: string }) => (
            <View
              style={[
                styles.topBarTab,
                { borderTopColor: focused ? "#00d6d8" : "white" },
              ]}
            >
              <Ionicons name="home" size={15} color={color} />
            </View>
          ),
        }}
      />


     <Tabs.Screen
  name="search"
  options={{
    tabBarLabel: "Search",
    headerShown: false,
    tabBarIcon: ({ focused, color }: { focused: boolean; color: string }) => (
      <View
        style={[
          styles.topBarTab,
          { borderTopColor: focused ? "#00d6d8" : "white" },
        ]}
      >
        <Ionicons name="search" size={15} color={color} />
      </View>
    ),
  }}
/>


      <Tabs.Screen
        name="(profile)"
        options={{
          headerShown: false,
          tabBarLabel: "Profile",

          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <View style={[
              styles.topBarTab,
              { borderTopColor: focused ? "#00d6d8" : "white" },
            ]}>
              <Image
              source={{
                uri: user.image,
              }}
              style={styles.profileImage}
            />
            </View>
            
          ),
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
  topBarTab: {
    alignItems: "center",
    paddingTop: 16,
    paddingHorizontal: 50,

    borderTopWidth: 2,
  },
});
