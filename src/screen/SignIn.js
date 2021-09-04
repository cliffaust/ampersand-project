import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import DismissKeyboard from "../components/DismissKeyboard";

const SignIn = ({ navigation }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (name, text) => {
    setUser({ ...user, [name]: text });
  };

  const btnBox = {
    borderBottomWidth: 2,
    paddingVertical: 5,
    borderBottomColor: "#e76f51",
  };

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/login.png")}
          ></Image>
        </View>
        <KeyboardAvoidingView behavior="height" style={styles.form}>
          <View>
            <Input
              placeholder="john.smith@email.com"
              label="Email"
              onChange={(text) => handleOnChange("email", text)}
            ></Input>
            <View style={styles.line}></View>
          </View>
          <View>
            <Input
              placeholder="******"
              label="Password"
              onChange={(text) => handleOnChange("password", text)}
            ></Input>
            <View style={styles.line}></View>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.btnContainer}>
          <Button
            text="SIGN IN"
            onPress={() => navigation.navigate("home")}
          ></Button>
          <View style={styles.restPassword}>
            <Text style={{ fontSize: 16 }}>forgot?</Text>
            <Button btnContainerStyle={btnBox} text="Reset Password"></Button>
          </View>
        </View>
      </SafeAreaView>
    </DismissKeyboard>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  imageContainer: {
    flex: 0.6,
  },

  image: {
    width: "100%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },

  form: {
    flex: 0.2,
    paddingHorizontal: 20,
    justifyContent: "space-around",
  },

  restPassword: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },

  line: {
    height: 2,
    width: "100%",
    backgroundColor: "#ced4da",
    marginTop: 12,
    marginBottom: 12,
  },

  btnContainer: {
    flex: 0.2,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
});
