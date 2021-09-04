import React from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";

const Input = ({ label, placeholder, onChange }) => {
  return (
    <View style={styles.inputBox}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        onChange={onChange}
        textAlign={"right"}
        style={styles.input}
      ></TextInput>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  label: {
    fontSize: 16,
    flex: 0.4,
    fontWeight: "bold",
  },

  input: {
    flex: 0.6,
    fontSize: 16,
  },
});
