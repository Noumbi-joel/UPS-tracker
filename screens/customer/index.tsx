import React, { useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Image, Input } from "@rneui/themed";

type Props = {};

const CustomerScreen = (props: Props) => {
  const [input, setInput] = useState<string>("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#59C1CC" }}>
      <ScrollView>
        <Image
          source={{ uri: "https://links.papareact.com/3jc" }}
          containerStyle={styles.logo}
          PlaceholderContent={
            <ActivityIndicator size="large" color="#59C1CC" />
          }
        />

        <Input
          placeholder="Search by customer"
          value={input}
          onChangeText={setInput}
          containerStyle={styles.inputContainerStyle}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 256,
  },
  inputContainerStyle: {
    backgroundColor: "white",
    paddingHorizontal: 40,
    paddingTop: 20,
    paddingBottom: 0
  },
});

export default CustomerScreen;
