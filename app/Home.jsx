import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";

import { Colors } from "@/constants/Colors";
import { ItemList, FloatingActionButton, Spinner } from "@/components";
import { useFetchEmployee } from "@/hooks/query";
import useDebounce from "@/hooks/useDebounce";

const index = () => {
  const [search, setSearch] = useState("");
  const debounceSearchTerm = useDebounce(search, 500);

  const { data, isLoading, hasNextPage, fetchNextPage } =
    useFetchEmployee(debounceSearchTerm);
  const dataArr = data?.pages?.map((page) => page).flat();

  const onReachEnd = () => {
    if (hasNextPage && !isLoading) {
      fetchNextPage();
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          placeholder="Search"
          style={styles.search}
          onChangeText={(e) => setSearch(e)}
          value={search}
        />
      </View>
      <FlatList
        data={dataArr}
        renderItem={({ item }) => <ItemList item={item} />}
        keyExtractor={(item) => item.currentPage}
        showsVerticalScrollIndicator={false}
        onEndReached={onReachEnd}
        onEndReachedThreshold={0.5}
      />
      <FloatingActionButton />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  search: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    borderWidth: 0.5,
    borderColor: Colors.border,
    borderRadius: 5,
  },
});
