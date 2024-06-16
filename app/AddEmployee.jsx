import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useRouter, Stack } from "expo-router";
import { Formik } from "formik";

import { Colors } from "@/constants/Colors";
import { Input, Button } from "@/components";
import client from "@/api/client";

const initialValues = {
  first_name: "",
  last_name: "",
  company_name: "",
  address: "",
  city: "",
  county: "",
  state: "",
  zip: "",
  phone1: "",
  phone2: "",
  email: "",
  web: "",
};

const AddEmployee = () => {
  const router = useRouter();

  const onSubmit = async (values, actions) => {
    actions.setSubmitting(true);
    try {
      await client.post("/employee", { ...values });
      router.back();
    } catch (error) {}
    actions.setSubmitting(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: "Add Employee",
        }}
      />
      <ScrollView
        style={styles.scrollview}
        showsVerticalScrollIndicator={false}
      >
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
            <>
              <Input
                label="First Name"
                placeholder="First Name"
                value={values.first_name}
                onChangeText={handleChange("first_name")}
              />
              <Input
                label="Last Name"
                placeholder="Last Name"
                value={values.last_name}
                onChangeText={handleChange("last_name")}
              />
              <Input
                label="Company Name"
                placeholder="Company Name"
                value={values.company_name}
                onChangeText={handleChange("company_name")}
              />
              <Input
                label="Address"
                placeholder="Address"
                value={values.address}
                onChangeText={handleChange("address")}
              />
              <Input
                label="City"
                placeholder="City"
                value={values.city}
                onChangeText={handleChange("city")}
              />
              <Input
                label="County"
                placeholder="County"
                value={values.county}
                onChangeText={handleChange("county")}
              />
              <Input
                label="State"
                placeholder="State"
                value={values.state}
                onChangeText={handleChange("state")}
              />
              <Input
                label="Zip"
                placeholder="Zip"
                value={values.zip}
                onChangeText={handleChange("zip")}
              />
              <Input
                label="phone1"
                placeholder="phone1"
                value={values.phone1}
                onChangeText={handleChange("phone1")}
              />
              <Input
                label="Phone2"
                placeholder="Phone2"
                value={values.phone2}
                onChangeText={handleChange("phone2")}
              />
              <Input
                label="email"
                placeholder="email"
                value={values.email}
                onChangeText={handleChange("email")}
              />
              <Input
                label="web"
                placeholder="web"
                value={values.web}
                onChangeText={handleChange("web")}
              />
              <View style={styles.button}>
                <Button
                  title="Submit"
                  onPress={handleSubmit}
                  disabled={isSubmitting}
                />
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddEmployee;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollview: {
    marginHorizontal: 20,
  },
  button: {
    justifyContent: "center",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
});
