import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Logo from "../components/Logo";
import Button from "../components/Button";

const GettingStarted = ({ navigation }) => {
  const specificLogoContainerStyle = {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  };

  const specificLogoStyle = {
    fontSize: 30,
    fontWeight: "bold",
  };

  const gettingStartedBtn = {
    borderBottomWidth: 2,
    paddingVertical: 5,
    borderBottomColor: "#e76f51",
  };

  return (
    <SafeAreaView style={styles.container}>
      <Logo
        container={specificLogoContainerStyle}
        logo={specificLogoStyle}
      ></Logo>
      <View style={styles.logoContact}>
        <View>
          <Text style={styles.contactText}>AMPERSAND</Text>
        </View>
        <View>
          <Text style={styles.contactText}>CONTACT</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate("getintouch")}
          btnContainerStyle={gettingStartedBtn}
          text={"GET STARTED"}
        ></Button>
      </View>
    </SafeAreaView>
  );
};

export default GettingStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logoContact: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },

  contactText: {
    fontSize: 18,
    letterSpacing: 4,
  },

  buttonContainer: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
});
