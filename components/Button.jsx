import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const Button = ({ onPress, title, disabled }) => {
  return (
    <Pressable style={styles.button} onPress={onPress} disabled={disabled}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 10,
  },
  text: { textAlign: "center", color: Colors.white, fontSize: 16 },
});

export default Button;
