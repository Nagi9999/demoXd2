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
  Alert
  
} from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import NotComponent from "../../../components/notComponent";
import notificationData from "../../../notification-data.json";

interface NotificationProps {
  user: string;
  id: string;
  image: string;
  behavior: ("comment" | "follow" | "suggestion" | "like" | "share")[];
  time: string;
  online: boolean;
}


const Notification = () => {
  const router = useRouter();

  const [notifications, setNotifications] = useState(notificationData);

  const handleDeleteItem = (itemId: string) => {
    // Display an alert before deleting the notification
    Alert.alert(
      "Delete Notification",
      "Are you sure you want to delete this notification?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            const updatedNotifications = notifications.filter(
              (item) => item.id !== itemId
            );
            setNotifications(updatedNotifications);
          },
        },
      ]
    );
  };

  // Filter notifications based on time
  const todayNotifications = notificationData.filter(
    (item) => parseInt(item.time) < 24
  );

  const thisWeekNotifications = notificationData.filter(
    (item) => parseInt(item.time) >= 24
  );

  // Combine data into sections
  const sections: readonly SectionListData<
    NotificationProps,
    DefaultSectionT
  >[] = [
    { title: "Today", data: todayNotifications },
    { title: "This Week", data: thisWeekNotifications },
  ];

  const renderSectionHeader: SectionListRenderItem<NotificationProps, DefaultSectionT> = ({ section }) => (
    <View style={styles.notificationsContainer}>
      <View style={styles.dateNotifications}>
        <Text style={styles.dateTitleNotifications}>{section.title}</Text>
        <Text style={styles.notificationsCount}>
          {section.title === "Today"
            ? todayNotifications.length
            : thisWeekNotifications.length}
        </Text>
      </View>
    </View>
  );
  

  const renderItem: ListRenderItem<NotificationProps> = ({ item }) => {
    return (
      <NotComponent data={item} onDelete={() => handleDeleteItem(item.id)} />
    );
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

      <View style={styles.ListContainer}>
        <SectionList
          sections={sections}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          style={styles.sectionStyle}
        />
      </View>
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
