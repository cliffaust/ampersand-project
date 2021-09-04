import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import Button from "../components/Button";

const InTouch = ({ navigation }) => {
  const btnBox = {
    borderBottomWidth: 2,
    paddingVertical: 5,
    borderBottomColor: "#e76f51",
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/getintouch.png")}
        ></Image>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.header}>
          KEEP IN TOUCH WITH THE PEOPLE OF AMPERSAND
        </Text>
        <Text style={styles.text}>
          Sign in or register with your Ampersand email
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <Button
          onPress={() => navigation.navigate("register")}
          btnContainerStyle={btnBox}
          text={"REGISTER"}
        ></Button>
        <Button
          onPress={() => navigation.navigate("signin")}
          btnContainerStyle={btnBox}
          text={"LOGIN"}
        ></Button>
      </View>
    </SafeAreaView>
  );
};

export default InTouch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 0.5,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  textContainer: {
    flex: 0.4,
    marginTop: 30,
    paddingHorizontal: 20,
  },

  header: {
    fontSize: 20,
    marginBottom: 20,
  },

  btnContainer: {
    flex: 0.1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
