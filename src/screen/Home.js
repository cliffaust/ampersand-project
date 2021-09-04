import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Button from "../components/Button";
import { AntDesign } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-svg";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View></View>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Ampersand</Text>
        <AntDesign
          onPress={() => navigation.navigate("profile")}
          name="user"
          size={30}
          color="#fff"
        />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.infoHeader}>Exchange Contact Information</Text>
        <Text style={styles.text}>
          Scan this QR below to share your contact
        </Text>
      </View>
      <View style={styles.qrImageBox}>
        <QRCode
          size={250}
          style={styles.qrImage}
          value="https://www.google.com/"
        ></QRCode>
      </View>
      <View style={styles.user}>
        <View style={styles.profileImage}></View>
        <View style={styles.profile}>
          <Text style={styles.name}>Drew Barnes</Text>
          <Text style={styles.role}>Head of Marketing</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Want to add a new connection?</Text>
        <View style={styles.btnBox}>
          <Button
            text="Scan QR"
            onPress={() => navigation.navigate("qrscanner")}
          ></Button>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.1,
    backgroundColor: "#e63946",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingVertical: 10,
    flexDirection: "row",
  },
  textBox: {
    flex: 0.1,
    paddingHorizontal: 30,
    justifyContent: "center",
  },

  infoHeader: {
    fontSize: 18,
    fontWeight: "bold",
  },

  text: {
    fontSize: 16,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
  },

  role: {
    fontSize: 16,
  },

  qrImageBox: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },

  //   qrImage: {
  //     width: "80%",
  //     height: "80%",
  //   },

  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#2d3142",
    marginRight: 10,
  },

  profile: {},

  user: {
    flex: 0.2,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  footer: {
    flex: 0.1,
    borderTopWidth: 2,
    borderColor: "#ced4da",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
