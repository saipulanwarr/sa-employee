import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import { useFetchDetailEmployee } from "@/hooks/query";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Colors } from "@/constants/Colors";
import { Spinner } from "@/components";

const DetailEmployee = () => {
  const params = useLocalSearchParams();
  const { id } = params;
  const { data, isLoading } = useFetchDetailEmployee(id);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Detail Employee",
        }}
      />
      <MaterialCommunityIcons name="face-man-profile" size={40} color="black" />
      <Text style={styles.textName}>
        {data.first_name} {data.last_name}
      </Text>
      <Text style={styles.text}>{data.email}</Text>
      <Text style={styles.text}> {data.web}</Text>
      <Text style={styles.text}>
        {data.address} {data.city}
      </Text>
      <Text style={styles.text}> {data.phone1}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
    margin: 10,
    height: 200,
    borderRadius: 10,
  },
  textName: { fontSize: 20, marginVertical: 5 },
  text: { color: Colors.gray },
});

export default DetailEmployee;
