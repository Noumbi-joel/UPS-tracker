import { Text, View } from "react-native";
import React from "react";

// hooks
import useCustomerOrders from "../../hooks/useCustomerOrders";

// rn nav
import { useNavigation } from "@react-navigation/native";

// types
import { CustomerNavProp } from "../../typings";

type Props = {
  email: string;
  name: string;
  userId: string;
};

const CustomerCard = ({ email, name, userId }: Props) => {
  const nav = useNavigation<CustomerNavProp>();
  const { loading, error, orders } = useCustomerOrders(userId);
  return (
    <View>
      <Text>index</Text>
    </View>
  );
};

export default CustomerCard;
