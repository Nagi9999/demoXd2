import React from "react";
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import BtnComponent from "../components/BtnComponent";
import InputSign from "../components/InputSign";
import { useRouter } from "expo-router";


const ForgetPass = () => {

    const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <Pressable
        onPress={() => {
          router.push("/SignInScreen");
        }}
      >
        <Ionicons
          name="arrow-back-outline"
          size={24}
          color="black"
          style={styles.backIcon}
        />
      </Pressable>
      <Text style={styles.forgotPassword}>Forgot Password</Text>

      <View style={styles.emailContainer}>
        <InputSign placeholder="Email" secureTextEntry={false}  onInputChange={() => {}} />
        <BtnComponent
          ScreenTitle={"Send Email"}
          destinationScreen={"SplashScreen"}
          customStyle={styles.btnSend}
          backgroundColor={"rgba(0, 214, 216, 1)"}
          color={"#ffffff"}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  backIcon: {
    paddingTop: 60,
    marginHorizontal: 10,
  },
  forgotPassword: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 35,
  },
  emailContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  btnSend: {
    backgroundColor: "rgba(0, 214, 216, 0.1)",
    marginVertical: 20,
    alignSelf: "center",
  },
});

export default ForgetPass;
