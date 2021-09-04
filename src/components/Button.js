import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Button = ({ btnContainerStyle, btnTextStyle, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={btnContainerStyle || styles.btn}>
      <Text style={btnTextStyle || styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    padding: 15,
    backgroundColor: "#e63946",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#002233",
    fontWeight: "bold",
  },
});
