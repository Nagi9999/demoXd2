import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
 
} from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import notificationData from "../../../notification-data.json";
import NotificationsList from "../../../components/notificationsList";


const Notification = () => {
  const router = useRouter();

  const [notifications, setNotifications] = useState(notificationData);

  const deleteNotification = (itemId: string) => {
    const updatedNotifications = notifications.filter(
      (item) => item.id !== itemId
    );
    setNotifications(updatedNotifications);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.notificationPageContainer}>
        <Pressable
          onPress={() => {
            router.push("/ProfilePage");
          }}
        >
          <Ionicons name="arrow-back-outline" size={22} color="black" />
        </Pressable>
        <Text style={styles.notificationPageTitle}>Notification</Text>
      </View>

      <NotificationsList notifications={notifications} deleteNotification={deleteNotification}  />

    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  notificationPageContainer: {
    flexDirection: "row",
    marginTop: 56,
    marginBottom: 12,
    marginHorizontal: 14,
    alignItems: "center",
  },
  notificationPageTitle: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 110,
  }
});
