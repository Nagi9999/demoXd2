import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import Swipeout from "react-native-swipeout";
import userData from "../user-data.json";

//assuming a user from local data
const user = userData[0];

interface NotificationData {
  user: string;
  id: string;
  image: string;
  behavior: ("comment" | "follow" | "suggestion" | "like" | "share")[];
  time: string;
  online: boolean;
}

//For Online blue Dot
const renderNotificationActive = (online: boolean) => {
  if (online) {
    return <View style={styles.notificationActive} />;
  }
  return null;
};

//to hide follow/following based on the notifications data
const NotComponent: React.FC<{
  data: NotificationData;
  onDelete: () => void;
}> = ({ data, onDelete }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  //following/follow
  const handleFollowPress = () => {
    setIsFollowing(!isFollowing);
  };

  //Delete
  const handleDeletePress = () => {
    onDelete();
  };

  //for the attached icon on the profile photo
  const renderNotificationSign = () => {
    const behavior = data.behavior[0];

    switch (behavior) {
      case "comment":
        return <FontAwesome name="commenting-o" size={12} color="#00d6d8" />;
      case "follow":
        return <FontAwesome name="address-book" size={12} color="#00d6d8" />;
      case "suggestion":
        return <FontAwesome name="facebook" size={12} color="#00d6d8" />;
      case "like":
        return <FontAwesome name="heart-o" size={12} color="#00d6d8" />;
      case "share":
        return <FontAwesome name="share" size={12} color="#00d6d8" />;
      default:
        return null;
    }
  };

  //for each notification a specific script and design
  const renderNotificationContent = () => {
    const behavior = data.behavior[0];
    const timeInHours = parseInt(data.time);

    // Convert hours to days if it is more than 24 hours
    const timeText =
      timeInHours >= 24
        ? `${Math.floor(timeInHours / 24)} days ago`
        : `${timeInHours} hours ago`;

    //display the notification script based on behaviors
    switch (behavior) {
      case "comment":
        return (
          <View style={styles.notScriptContainer}>
            <View style={styles.scriptContainer}>
              <Text style={styles.notScriptBehavior}>
                <Text style={styles.userText}>{data.user}</Text> mentioned you
                in a comment:{" "}
                <Link href={"/ProfilePage"}>
                  <Text style={styles.userTextMe}>@{user.username} </Text>
                </Link>{" "}
                Comment
              </Text>
              <Text style={styles.notScriptTime}>{timeText}</Text>
            </View>
          </View>
        );
      case "follow":
        return (
          <View style={styles.notScriptContainer}>
            <View style={styles.scriptContainer}>
              <Text style={styles.notScriptBehavior}>
                <Text style={styles.userText}>{data.user}</Text> started
                following you
              </Text>
              <Text style={styles.notScriptTime}>{timeText}</Text>
            </View>
            <Pressable
              onPress={handleFollowPress}
              style={[
                styles.followContainer,
                {
                  backgroundColor: isFollowing
                    ? "#00d6d8"
                    : "rgba(0,214,216,0.1)",
                },
              ]}
            >
              <Text
                style={[
                  styles.followText,
                  { color: isFollowing ? "#fff" : "rgba(0,214,216,1)" },
                ]}
              >
                {isFollowing ? "Following" : "Follow"}
              </Text>
            </Pressable>
          </View>
        );
      case "suggestion":
        return (
          <View style={styles.notScriptContainer}>
            <View style={styles.scriptContainer}>
              <Text style={styles.notScriptBehavior}>
                <Text style={styles.userText}>
                  {" "}
                  Your Facebook friend {data.user} is on this platform
                </Text>
              </Text>
              <Text style={styles.notScriptTime}>{timeText}</Text>
            </View>
            <Pressable
              onPress={handleFollowPress}
              style={[
                styles.followContainer,
                {
                  backgroundColor: isFollowing
                    ? "#00d6d8"
                    : "rgba(0,214,216,0.1)",
                },
              ]}
            >
              <Text
                style={[
                  styles.followText,
                  { color: isFollowing ? "#fff" : "rgba(0,214,216,1)" },
                ]}
              >
                {isFollowing ? "Following" : "Follow"}
              </Text>
            </Pressable>
          </View>
        );
      case "like":
        return (
          <View style={styles.notScriptContainer}>
            <View>
              <Text style={styles.notScriptBehavior}>
                <Text style={styles.userText}>{data.user}</Text> Like your story
              </Text>
              <Text style={styles.notScriptTime}>{timeText}</Text>
            </View>
          </View>
        );
      case "share":
        return (
          <View style={styles.notScriptContainer}>
            <View>
              <Text style={styles.notScriptBehavior}>
                <Text style={styles.userText}>{data.user}</Text> shared your
                story
              </Text>
              <Text style={styles.notScriptTime}>{timeText}</Text>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <Swipeout
      right={[
        {
          component: (
            <View style={styles.deleteIconContainer}>
              <FontAwesome name="trash" size={20} color="rgba(255,56,56,1)" />
            </View>
          ),
          backgroundColor: "#ffffff",
          onPress: handleDeletePress,
        },
      ]}
      autoClose={true}
      style={styles.swipeContainer}
    >
      <View style={styles.notificationContainer}>
        <View style={styles.profileImageContainer}>
          {renderNotificationActive(data.online)}
          <Image source={{ uri: data.image }} style={styles.profileImage} />
          <View style={styles.notificationSign}>
            {renderNotificationSign()}
          </View>
        </View>
        <View>{renderNotificationContent()}</View>
      </View>
    </Swipeout>
  );
};

export default NotComponent;

const styles = StyleSheet.create({
  swipeContainer: {
    backgroundColor: "#ffffff",
  },
  deleteIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
    backgroundColor: "rgba(255,56,56,0.1)",
    borderRadius: 50,
    width: 44,
    height: 44,
    marginHorizontal: 10,
    marginVertical: 22,
    alignSelf: "center",
  },
  notificationContainer: {
    height: 53,
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  profileImageContainer: {},
  notificationSign: {
    width: 24,
    height: 24,
    backgroundColor: "#ffffff",
    filter: "drop-shadow(0px 3px 3px rgba(0,0,0,0.16 ))",
    position: "absolute",
    borderRadius: 15,
    marginLeft: 55,
    marginTop: 50,
    //android
    elevation: 3,
    // iOS
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },

  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
    resizeMode: "contain",
  },
  notificationActive: {
    position: "absolute",
    height: 4,
    width: 4,
    backgroundColor: "#00d6d8",
    borderRadius: 5,
    paddingRight: 2,
    paddingTop: 2,
    marginLeft: 70,
    marginTop: 5,
  },
  notScriptContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 190,
    height: 53,
    marginLeft: 10,
  },
  scriptContainer: {
    justifyContent: "space-between",
  },
  userText: {
    color: "black",
    fontWeight: "bold",
  },
  userTextMe: {
    color: "#00D6D8",
    fontWeight: "bold",
  },
  notScriptBehavior: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#afc1c4",
    marginVertical: 4,
    width: 170,
  },
  notScriptTime: {
    fontSize: 12,
    fontWeight: "normal",
    color: "#d1dddf",
  },
  followContainer: {
    width: 68,
    height: 32,
    borderRadius: 30,
    backgroundColor: "rgba(0,214,216,0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  followText: {
    fontSize: 12,
    color: "rgba(0,214,216,1)",
  },
});
