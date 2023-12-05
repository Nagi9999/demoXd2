import { useRouter } from "expo-router";
import React from "react";
import { View, StyleSheet, Pressable, Text, StyleProp, ViewStyle } from "react-native";

// Define the valid screen names
const screenNames = {
  SignInScreen: "/SignInScreen",
  SignUpScreen: "/SignUpScreen",
  ForgetPass: "/ForgetPass",
  SplashScreen:"/"
} as const;

// Create a union type of valid screen names
type ScreenName = keyof typeof screenNames;

interface BtnComponentProps {
  ScreenTitle: string;
  destinationScreen: ScreenName;
  customStyle?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  color?: string;
}

const BtnComponent: React.FC<BtnComponentProps> = ({
  ScreenTitle,
  destinationScreen,
  customStyle,
  backgroundColor,
  color,
}) => {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => {
        router.push(screenNames[destinationScreen]); // Use the provided destination screen path
      }}
    >
      <View style={[customStyle, style.btnStyle, { backgroundColor }]}>
        <Text style={[style.textStyle, { color }]}>{ScreenTitle}</Text>
      </View>
    </Pressable>
  );
};

export default BtnComponent;


const style = StyleSheet.create({
  btnStyle: {
    width: 335,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 118,
  },

  textStyle: {
    fontWeight: "500",
    fontSize: 17,
    textAlign: "center",
  },
});