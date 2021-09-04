import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GettingStarted from "./src/screen/GettingStarted";
import InTouch from "./src/screen/InTouch";
import Register from "./src/screen/Register";
import SignIn from "./src/screen/SignIn";
import Home from "./src/screen/Home";
import Profile from "./src/screen/Profile";
import QrScanner from "./src/screen/QrScanner";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="getStarted"
          options={{ title: "Get Started", headerShown: false }}
          component={GettingStarted}
        />
        <Stack.Screen
          name="getintouch"
          options={{ title: null, headerShown: false }}
          component={InTouch}
        />
        <Stack.Screen
          options={{
            title: "Register",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: "#e63946",
            },
          }}
          name="register"
          component={Register}
        />
        <Stack.Screen
          options={{
            title: "Sign In",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: "#e63946",
            },
          }}
          name="signin"
          component={SignIn}
        />
        <Stack.Screen
          options={{ title: null, headerShown: false }}
          name="home"
          component={Home}
        />
        <Stack.Screen
          options={{
            title: "My Profile",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: "#e63946",
            },
          }}
          name="profile"
          component={Profile}
        />

        <Stack.Screen
          options={{ title: null, headerShown: false }}
          name="qrscanner"
          component={QrScanner}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
