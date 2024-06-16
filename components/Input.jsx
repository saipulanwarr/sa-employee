import { Colors } from "@/constants/Colors";
import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Input = ({ placeholder, label, value, onChangeText, numeric }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        keyboardType={numeric ? "numeric" : "default"}
        placeholderTextColor={Colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    marginBottom: 10,
    color: Colors.black,
  },
  textInput: {
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: Colors.gray,
  },
});

export default Input;
