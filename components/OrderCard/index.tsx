import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

// typings
import { Order, OrdersNavProp } from "../../typings";
import { Card, Icon } from "@rneui/themed";

// rn nav
import { useNavigation } from "@react-navigation/native";

type Props = {
  item: Order;
};

const OrderCard = ({ item }: Props) => {
  const nav = useNavigation<OrdersNavProp>();
  return (
    <TouchableOpacity onPress={() => nav.navigate("Order", { order: item })}>
      <Card>
        <View className="flex-row justify-between items-center">
          <View>
            <Icon
              name="truck-delivery"
              color="#EB6A7C"
              type="material-community"
            />
            <Text className="text-[10px]">
              {new Date(item.createdAt).toDateString()}
            </Text>
          </View>

          <View>
            <Text className="text-gray-500 text-[10px]">
              {item.carrier}-{item.trackingId}
            </Text>
            <Text className="text-gray-500 text-xl">
              {item.trackingItems.customer.name}
            </Text>
          </View>

          <View className="flex-row items-center">
            <Text className="text-sm text-[#EB6A7C]">
              {item.trackingItems.items.length}x
            </Text>
            <Icon name="box" type="feather" style={{ marginLeft: 2 }} />
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default OrderCard;
