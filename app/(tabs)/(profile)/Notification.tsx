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
} from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import NotComponent from "../../../components/notComponent";
// import notificationData from "../../../notification-data.json";

//local data
const notificationData: NotificationProps[] = [
  {
    user: "Naji",
    id: "1",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/31PykOKnnIL._SY445_SX342_.jpg",
    behavior: "follow",
    time: "1",
    online: true,
  },
  {
    user: "Joseph",
    id: "2",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/31PykOKnnIL._SY445_SX342_.jpg",
    behavior: "comment",
    time: "2",
    online: true,
  },
  {
    user: "Maria",
    id: "3",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/31PykOKnnIL._SY445_SX342_.jpg",
    behavior: "like",
    time: "3",
    online: false,
  },
  {
    user: "Majd",
    id: "4",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/31PykOKnnIL._SY445_SX342_.jpg",
    behavior: "suggestion",
    time: "27",
    online: false,
  },
  {
    user: "Peter",
    id: "5",
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/31PykOKnnIL._SY445_SX342_.jpg",
    behavior: "share",
    time: "30",
    online: true,
  },
];

interface NotificationProps {
  user: string;
  id: string;
  image: string;
  behavior: "comment" | "follow" | "suggestion" | "like" | "share";
  time: string;
  online: boolean;
}

const Notification = () => {
  const router = useRouter();

  const [notifications, setNotifications] = useState(notificationData);

  const handleDeleteItem = (itemId: string) => {
    const updatedNotifications = notifications.filter(
      (item) => item.id !== itemId
    );
    setNotifications(updatedNotifications);
  };

  // Filter notifications based on time
  const todayNotifications = notificationData.filter(
    (item) => parseInt(item.time) < 24
  );

  const thisWeekNotifications = notificationData.filter(
    (item) => parseInt(item.time) >= 24
  );

  // Combine data into sections
  const sections = [
    { title: "Today", data: todayNotifications },
    { title: "This Week", data: thisWeekNotifications },
  ];

  const renderSectionHeader: SectionListRenderItem<NotificationProps> = ({
    section,
  }) => (
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
            router.push("/SignInScreen");
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
    paddingTop: 20,
  },
});
