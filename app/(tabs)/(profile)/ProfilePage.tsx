import { View, Text, SafeAreaView, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import userData from "../../../user-data.json"

const ProfilePage = () => {
  const router = useRouter();

  //assuming a user from local data 
  const user = userData[0];



  return (

    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Profile</Text>
        <Pressable onPress={() => {
          router.push("/NotificationPage");
        }} >
        <View style={styles.notificationIcon}>
          <View style={styles.notificationActive} />
          <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
        </Pressable>

        
      </View>
      <View style={styles.profileSection}> 
        <View>
          <Image source={{ uri: user.image }} style={styles.profileImage} />
        </View>

        <View style={styles.nameContainer}>
          {user.classGold === true && (  
            <View style={styles.profileClass}>
              <Text style={styles.classText}>Gold</Text>
            </View> )}
          <Text style={styles.profileName}>{user.name}</Text>
        </View>
      </View>


      <View style={styles.profileManageContainer}>
        <Text style={styles.manageTitle}>My Books</Text>
        <View style={styles.manageSection}>
        <Text style={styles.manageText}>Book</Text>
        <View style={styles.bookCountContainer}>
          <Text style={styles.booksCount}>{user.bookCount}</Text>
          <Ionicons name="chevron-forward" size={16} color="#D1DDDF" />
        </View>
      </View>
      </View>

      <View style={styles.profileManageContainer}>
        <Text style={styles.manageTitle}>Account</Text>
        <View style={styles.manageSection} >
          <Text style={styles.manageText}>Edit Profile</Text>
          <View style={styles.bookCountContainer} >
          <Ionicons name="chevron-forward" size={16} color="#D1DDDF"  />
          </View>
        </View>

        <View style={styles.manageSection} >
          <Text style={styles.manageText}>Log out</Text>
          <View style={styles.bookCountContainer} >
          <Ionicons name="chevron-forward" size={16} color="#D1DDDF"  />
          </View>
        </View>
        
      </View>
    </SafeAreaView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
    height: 56,
    width: 335,
  },
  titleText: {
    fontSize: 44,
    fontWeight: "bold",
    textAlign: "left",
    color: "#242126",
  },
  notificationIcon: {
    width: 24,
    height: 24,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  notificationActive: {
    height: 4,
    width: 4,
    backgroundColor: "#00d6d8",
    borderRadius: 5,
    paddingRight: 2,
    paddingTop: 2,
  },
  profileSection: {
    width: 253,
    height: 80,
    marginHorizontal: 20,
    flexDirection: "row",
    marginBottom:50
  },

  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  nameContainer: {
    marginHorizontal: 15,
  },
  profileClass: {
    width: 60,
    height: 28,
    backgroundColor: "rgba(196, 161, 45, 0.1)",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  classText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "rgba(196,161,45,1)",
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#242126",
    marginVertical: 8,
  },
  profileManageContainer: {
    marginTop: 33,
    width: 335,
    height: 69,
    marginLeft: 20,
  },
  manageTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#d1dddf",
  },
  manageSection: {
    marginTop: 10,
    width:"100%",
    height:44,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  manageText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#242126",
  },
  bookCountContainer:{
    flexDirection:"row",
    alignItems:"center"
  },
  booksCount:{
    fontWeight:"bold",
    fontSize:17,
    color:"#00d6d8",
    marginHorizontal:10
  }
});
