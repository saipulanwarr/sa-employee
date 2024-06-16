import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import { Formik } from "formik";

import client from "@/api/client";
import { Keys, saveToAsyncStorage } from "@/utils/asyncStorage";
import { Input, Button, Gap } from "@/components";
import { Colors } from "@/constants/Colors";

const initialValues = {
  username: "",
  password: "",
};

const Login = () => {
  const onSubmit = async (values, actions) => {
    actions.setSubmitting(false);
    try {
      const result = await client.post("/auth/login", { ...values });

      await saveToAsyncStorage(Keys.AUTH_TOKEN, result.data);

      router.replace("Home");
    } catch (err) {
      console.log("err", err);
    }
    actions.setSubmitting(false);
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: Colors.black,
          marginBottom: 10,
        }}
      >
        Log in
      </Text>
      <Text style={{ color: Colors.gray, marginBottom: 20 }}>
        Welcome back! Please enter your details
      </Text>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <View>
            <Input
              label="Username"
              placeholder="Username"
              value={values.username}
              onChangeText={handleChange("username")}
            />
            <Input
              label="Password"
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange("password")}
            />
            <Gap height={30} />
            <Button
              title="Login"
              onPress={handleSubmit}
              disable={isSubmitting}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});

export default Login;
