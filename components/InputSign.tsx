import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";

interface InputSignProps extends TextInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  onInputChange: (text: string) => void;
}

const InputSign: React.FC<InputSignProps> = ({ placeholder, secureTextEntry, onInputChange,children }) => {
  return (
    <TextInput
      style={style.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      placeholderTextColor={"#afc1c4"}
      onChangeText={(text) => onInputChange(text)}
    >{children}</TextInput>
  );
};

export default InputSign;

const style = StyleSheet.create({
  input: {
    height: 56,
    width: 335,
    margin: 20,
    marginHorizontal: 20,
    marginVertical: 5,
    marginBottom: 5,
    opacity: 0.5,
    borderRadius: 218,
    backgroundColor: "#edeff3",
    padding: 20,
    fontSize: 17,
    fontWeight: "500",
    textAlign: "left",
    letterSpacing: 1,
    color:"#242126"
  },
});
