import React from "react";
import {
  View,
  Text,
  StyleSheet,
 
  SectionList,
  SectionListRenderItem,
  ListRenderItem,
  SectionListData,
  DefaultSectionT,
  Alert,
} from "react-native";

import NotComponent from "./notificationItem";


interface NotificationListProps {
    user: string;
    id: string;
    image: string;
    behavior: string[];
    time: string;
    online: boolean;
    
  }
  
  interface NotificationsListProps {
    notifications: NotificationListProps[];
    deleteNotification: (itemId: string) => void;
  }
  
  const NotificationsList: React.FC<NotificationsListProps> = ({ notifications, deleteNotification }) => {

   
    
      // Filter notifications based on time and arrange them from latest to the oldest
      const todayNotifications = notifications
      .filter((item) => parseInt(item.time) < 24)
      .sort((a, b) => parseInt(a.time) - parseInt(b.time));
    
    const thisWeekNotifications = notifications
      .filter((item) => parseInt(item.time) >= 24)
      .sort((a, b) => parseInt(a.time) - parseInt(b.time));
    
    
      // Combine data into sections
      const sections: readonly SectionListData<
      NotificationListProps,
        DefaultSectionT
      >[] = [
        { title: "Today", data: todayNotifications },
        { title: "This Week", data: thisWeekNotifications },
      ];
    
      //render section Title based on date
      const renderSectionHeader: SectionListRenderItem<
        NotificationListProps,
        DefaultSectionT
      > = ({ section }) => (
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
          onPress: () => {deleteNotification},
        },
      ]
    );
  };
        
      const renderItem: ListRenderItem<NotificationListProps> = ({ item }) => {
        return (
          <NotComponent data={item} onDelete={() => handleDeleteItem(item.id)} />
        );
      };
    
  return (
    <View style={styles.ListContainer}>
    <SectionList
      sections={sections}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      style={styles.sectionStyle}
    ></SectionList>
  </View>
  )
}

export default NotificationsList



const styles = StyleSheet.create({
    
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
  