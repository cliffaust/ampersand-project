import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Input from "../components/Input";
import Button from "../components/Button";
import DismissKeyboard from "../components/DismissKeyboard";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    role: "",
    twitter: "",
    linkedln: "",
  });

  const handleOnChange = (name, text) => {
    setUser({ ...user, [name]: text });
  };

  const submit = () => {
    console.log(user.name);
  };

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.container}>
        <View style={styles.profilePicBox}>
          <AntDesign name="user" size={80} color="#e63946" />
          <Text style={styles.profileImageText}>ADD PROFILE PHOTO</Text>
        </View>
        <KeyboardAvoidingView behavior="height" style={styles.formBox}>
          <View>
            <Input
              onChange={(text) => handleOnChange("name", text)}
              label="Full Name"
              placeholder="Joan Shay"
            ></Input>
            <View style={styles.line}></View>
          </View>
          <View>
            <Input
              onChange={(text) => handleOnChange("email", text)}
              label="Email"
              placeholder="joan.shay@sparrow.com"
            ></Input>
            <View style={styles.line}></View>
          </View>
          <View>
            <Input
              onChange={(text) => handleOnChange("phoneNumber", text)}
              label="Phone Number"
              placeholder="+233 (245) 213 450"
            ></Input>
            <View style={styles.line}></View>
          </View>
          <View>
            <Input
              onChange={(text) => handleOnChange("role", text)}
              label="Role"
              placeholder="Director of Marketing"
            ></Input>
            <View style={styles.line}></View>
          </View>
          <View>
            <Input
              onChange={(text) => handleOnChange("twitter", text)}
              label="Twitter"
              placeholder="@joanshay"
            ></Input>
            <View style={styles.line}></View>
          </View>
          <View>
            <Input
              onChange={(text) => handleOnChange("linkedln", text)}
              label="Linkeln"
              placeholder="/joan.shay"
            ></Input>
            <View style={styles.line}></View>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.btnContainer}>
          <Button text="REGISTER" onPress={submit}></Button>
        </View>
      </SafeAreaView>
    </DismissKeyboard>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  profilePicBox: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },

  line: {
    height: 2,
    width: "100%",
    backgroundColor: "#ced4da",
    marginTop: 12,
    marginBottom: 12,
  },

  profileImageText: {
    fontSize: 16,
    color: "#e63946",
    marginTop: 5,
  },

  formBox: {
    flex: 0.5,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },

  btnContainer: {
    flex: 0.2,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
});
