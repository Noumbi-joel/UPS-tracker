import React from "react";
import { SafeAreaView, Text, View } from "react-native";

type Props = {};

const OrderScreen = (props: Props) => {
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
        hello Order
      </Text>
    </View>
  );
};

export default OrderScreen;
