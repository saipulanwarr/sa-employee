import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { Colors } from "@/constants/Colors";

const ItemList = ({ item }) => {
  return (
    <>
      {item.employee.map((val, index) => (
        <Pressable
          style={styles.item}
          key={index}
          onPress={() =>
            router.push({
              pathname: "/DetailEmployee",
              params: { id: val._id },
            })
          }
        >
          <View style={styles.content}>
            <View>
              <MaterialCommunityIcons
                name="face-man-profile"
                size={30}
                color="black"
              />
            </View>
            <View style={styles.contentText}>
              <Text style={styles.name} numberOfLines={1}>
                {val.first_name} {val.last_name}
              </Text>
              <Text style={styles.age} numberOfLines={1}>
                {val.company_name}
              </Text>
              <Text style={styles.age} numberOfLines={1}>
                {val.county}
              </Text>
            </View>
          </View>
        </Pressable>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 0.5,
    borderColor: Colors.border,
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 0.5,
  },
  content: { flexDirection: "row" },
  name: { color: Colors.black, fontSize: 16, marginBottom: 8 },
  age: { color: Colors.gray, marginBottom: 5 },
  image: { width: 40, height: 40, borderRadius: 5 },
  contentText: { flex: 1, marginLeft: 10 },
});

export default ItemList;
