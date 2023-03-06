import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

// hooks
import useCustomerOrders from "../../hooks/useCustomerOrders";

// rn nav
import { useNavigation } from "@react-navigation/native";

// types
import { CustomerNavProp } from "../../typings";

// utils
import storeModalData from "../../utils/saveModalInfos";

// rne
import { Card } from "@rneui/base";
import { Icon } from "@rneui/themed";

type Props = {
  email: string;
  name: string;
  userId: string;
};

const CustomerCard = ({ email, name, userId }: Props) => {
  const nav = useNavigation<CustomerNavProp>();
  const { loading, error, orders } = useCustomerOrders(userId);
  return (
    <TouchableOpacity onPress={() => nav.navigate("MyModal", { userId })}>
      <Card containerStyle={{ padding: 20, borderRadius: 8 }}>
        <View>
          <View className="flex-row justify-between">
            <View>
              <Text className="text-2xl font-bold">{name}</Text>
              <Text className="text-sm" style={{ color: "#59C1CC" }}>
                ID: {userId}
              </Text>
            </View>

            <View className="flex-row items-center justify-end">
              <Text style={{ color: "#59C1CC" }}>
                {loading ? "Loading..." : `${orders.length} x`}
              </Text>
              <Icon
                name="box"
                type="entypo"
                color="#59C1CC"
                size={50}
                style={{ marginBottom: 20, marginLeft: "auto" }}
              />
            </View>
          </View>
        </View>

        <Card.Divider />
        <Text>{email}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CustomerCard;
