import React from "react";
import { StyleSheet, Text, View } from "react-native";

const logo = ({ container, logo }) => {
  return (
    <View style={container}>
      <Text style={logo}>AMPERSAND</Text>
    </View>
  );
};

export default logo;

const styles = StyleSheet.create({});
