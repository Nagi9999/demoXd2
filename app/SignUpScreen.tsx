import React, { useState } from "react";
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import BtnComponent from "../components/BtnComponent";
import InputSign from "../components/InputSign";
import { useRouter } from "expo-router";

const SignUpScreen = () => {
  const router = useRouter();
  const [checked, setChecked] = useState(true);

  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle={"dark-content"} />

      <Pressable
        onPress={() => {
          router.push("/");
        }}
      >
        <Ionicons
          name="arrow-back-outline"
          size={24}
          color="black"
          style={style.backIcon}
        />
      </Pressable>

      <Text style={style.signUp}>Sign Up</Text>

      <View style={style.multiInput}>
        <InputSign
          placeholder="Name"
          secureTextEntry={false}
          onInputChange={() => {}}
        />
        <InputSign
          placeholder="Email"
          secureTextEntry={false}
          onInputChange={() => {}}
        />
        <InputSign
          placeholder="Password"
          secureTextEntry={true}
          onInputChange={() => {}}
        />
      </View>

      <View style={style.checkbox}>
        <Pressable
          style={[style.checkboxBase, checked && style.checkboxChecked]}
          onPress={() => setChecked(!checked)}
        >
          {!checked && (
            <Ionicons name="checkmark-circle" size={24} color="#00d6d8" />
          )}
        </Pressable>

        <Text style={style.checkboxText}>
          Please sign me up to the latest book news and exclusive
        </Text>
      </View>

      <BtnComponent
        ScreenTitle={"Create Account"}
        destinationScreen={"SplashScreen"}
        customStyle={style.btnSignUp}
        backgroundColor={"rgba(0, 214, 216, 0.1)"}
        color={"rgba(0, 214, 216, 1)"}
      />

      <View style={style.termContent}>
        <Text style={style.termOfUse}>
          By signing in, creating an account, or checking out as a Guest, you
          are agreeing to our Terms of Use and our Privacy Policy
        </Text>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  backIcon: {
    paddingTop: 60,
    marginHorizontal: 10,
  },
  signUp: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 35,
  },

  multiInput: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },

  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    width: 24,
    height: 24,
    borderRadius: 50,
    borderStyle: "solid",
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#d1dddf",
  },
  checkboxBase: {
    width: 24,
    height: 24,
  },
  checkboxText: {
    fontSize: 12,
    fontWeight: "normal",
    textAlign: "left",
    color: "#afc1c4",
    paddingHorizontal: 2,
  },

  btnSignUp: {
    backgroundColor: "rgba(0, 214, 216, 0.1)",
    marginVertical: 20,
    alignSelf: "center",
  },

  termContent: {
    flex: 1,
    justifyContent: "flex-end",
  },

  termOfUse: {
    fontSize: 11,
    fontWeight: "normal",
    textAlign: "center",
    color: "#afc1c4",
    paddingHorizontal: 20,
    justifyContent: "flex-end",
    marginBottom: 20,
  },
});

export default SignUpScreen;
