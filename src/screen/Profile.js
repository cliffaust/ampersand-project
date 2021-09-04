import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { AntDesign, Entypo, Feather, Ionicons } from "@expo/vector-icons";

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.user}>
        <View style={styles.profileImage}></View>
        <View style={styles.profile}>
          <Text style={styles.name}>Drew Barnes</Text>
          <Text style={styles.role}>Head of Marketing</Text>
        </View>
      </View>
      <View style={styles.socialMedia}>
        <View style={styles.twitter}>
          <AntDesign name="twitter" size={24} color="#fff" />
        </View>
        <View style={styles.linkedin}>
          <Entypo name="linkedin" size={24} color="#fff" />
        </View>
      </View>
      <View style={styles.contact}>
        <View style={styles.phone}>
          <Feather name="phone" size={24} color="black" />
          <Text style={styles.phoneText}>+23348576849</Text>
        </View>
        <View style={styles.email}>
          <Feather name="mail" size={24} color="black" />
          <Text style={styles.emailText}>drew@ampersandllc.o</Text>
        </View>
        <View style={styles.location}>
          <Ionicons name="location-outline" size={24} color="black" />
          <Text style={styles.locationText}>Meduim Ray Galaxy</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  user: {
    flex: 0.2,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
  },

  role: {
    fontSize: 16,
  },

  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: "#2d3142",
    marginRight: 10,
    alignItems: "center",
  },

  socialMedia: {
    flex: 0.15,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
  },

  twitter: {
    height: 40,
    width: 40,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    borderRadius: 100,
  },

  linkedin: {
    height: 40,
    width: 40,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },

  contact: {
    paddingHorizontal: 20,
    flex: 0.2,
    justifyContent: "space-between",
  },

  phone: {
    flexDirection: "row",
    alignItems: "center",
  },

  email: {
    flexDirection: "row",
    alignItems: "center",
  },

  location: {
    flexDirection: "row",
    alignItems: "center",
  },

  phoneText: {
    marginLeft: 10,
  },

  emailText: {
    marginLeft: 10,
  },

  locationText: {
    marginLeft: 10,
  },
});
