import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";

const FloatingActionButton = () => {
  return (
    <View style={styles.button}>
      <Link href="/AddEmployee">
        <Text style={styles.text}>+</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    position: "absolute",
    bottom: 30,
    right: 15,
  },
  text: { fontSize: 30, color: Colors.white },
});

export default FloatingActionButton;
