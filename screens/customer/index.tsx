import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

type Props = {};

const CustomerScreen = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>
        hello customer
      </Text>
    </View>
  );
};

export default CustomerScreen;
