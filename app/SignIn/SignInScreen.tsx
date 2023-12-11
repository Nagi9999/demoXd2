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
import BtnComponent from "../../components/BtnComponent";
import { Entypo } from "@expo/vector-icons";
import InputSign from "../../components/InputSign";
import { useRouter } from "expo-router";

const SignInScreen = () => {
  const router = useRouter();
  const [checked, setChecked] = useState(true);
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const [btnBackgroundColor, setBtnBackgroundColor] = useState(
    "rgba(0, 214, 216, 0.1)"
  );
  const [btnTextColor, setBtnTextColor] = useState("rgba(0, 214, 216, 1)");

  //change the button style based on the input
  const handleInputChange = (text: string, inputType: string) => {

    if (inputType === "email") {
      SetEmail(text);
    } else if (inputType === "password") {
      SetPassword(text);
    }
    // Check if both email and password are filled
    if (email.length > 0 && password.length > 0) {
      setBtnBackgroundColor("rgba(0, 214, 216, 1)");
      setBtnTextColor("#ffffff");
    } else {
      setBtnBackgroundColor("rgba(0, 214, 216, 0.1)");
      setBtnTextColor("rgba(0, 214, 216, 1)");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
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
          style={styles.backIcon}
        />
      </Pressable>
      <Text style={styles.signIn}>Sign In</Text>
      <View style={styles.multiInput}>
        <InputSign
          placeholder="Email"
          secureTextEntry={false}
          text={email}
          onInputChange={(text) => handleInputChange(text, "email")}
        />
        <InputSign
          placeholder="Password"
          secureTextEntry={true}
          text={password}
          onInputChange={(text) => handleInputChange(text, "password")}
        />
      </View>

      <View style={styles.underInput}>
        <View style={styles.checkbox}>
          <Pressable
            style={[styles.checkboxBase, checked && styles.checkboxChecked]}
            onPress={() => setChecked(!checked)}
          >
            {!checked && (
              <Ionicons name="checkmark-circle" size={24} color="#00d6d8" />
            )}
          </Pressable>
          <Text style={styles.checkboxText}>Remember Me</Text>
        </View>

        <Pressable
          onPress={() => {
            router.push("./ForgetPass");
          }}
        >
          <Text style={styles.checkboxText}>Forgot your Password?</Text>
        </Pressable>
      </View>

      <BtnComponent
        ScreenTitle={"Sign In & Continue"}
        destinationScreen="HomePage"
        customStyle={styles.btnSignIn}
        backgroundColor={btnBackgroundColor}
        color={btnTextColor}
      />
      <Text style={styles.txtOr}>OR</Text>

      <View style={styles.socialMedia}>
        <Entypo
          name="facebook-with-circle"
          size={56}
          color="#4267b2"
          style={styles.facebook}
        />
        <Entypo
          name="twitter-with-circle"
          size={56}
          color="#1c9deb"
          style={styles.facebook}
        />
      </View>

      <View style={styles.termContent}>
        <Text style={styles.termOfUse}>
          By signing in, creating an account, or checking out as a Guest, you
          are agreeing to our Terms of Use and our Privacy Policy
        </Text>
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
  signIn: {
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
  underInput: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
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
    fontWeight: "bold",
    textAlign: "left",
    color: "#afc1c4",
    paddingHorizontal: 5,
  },

  btnSignIn: {
    marginVertical: 20,
    alignSelf: "center",
  },

  txtOr: {
    width: 25,
    height: 18,
    fontSize: 15,
    alignSelf: "center",
    color: "#afc1c4",
    fontWeight: "500",
    textAlign: "center",
  },
  socialMedia: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  facebook: {
    marginHorizontal: 8,
    width: 56,
    height: 56,
    marginVertical: 20,
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
    marginBottom: 20,
  },
});

export default SignInScreen;
