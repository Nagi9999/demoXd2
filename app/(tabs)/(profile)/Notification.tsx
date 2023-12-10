import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Image,
  FlatList,
  SectionList,
  SectionListRenderItem,
  ListRenderItem,
  SectionListData,
  DefaultSectionT,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import NotComponent from "../../../components/notComponent";
import notificationData from "../../../notification-data.json";
import NotificationsList from "../../../components/notificationsList";

interface NotificationProps {
  user: string;
  id: string;
  image: string;
  behavior: ["comment", "follow" ,"suggestion" , "like" , "share"];
  time: string;
  online: boolean;
}

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
        <Text style={styles.notoficationPageTitle}>Notification</Text>
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
  notoficationPageTitle: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 110,
  },
  notificationsContainer: {
    width: 335,
    marginHorizontal: 20,
  },
  dateNotifications: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  dateTitleNotifications: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#242126",
  },
  notificationsCount: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#00d6d8",
  },
  ListContainer: {
    marginBottom: 100,
    paddingTop: 0,
  },
  sectionStyle: {},
});
