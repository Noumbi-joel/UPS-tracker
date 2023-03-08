import { Text, View } from "react-native";
import React, { useLayoutEffect } from "react";

// rn nav
import { useNavigation, useRoute } from "@react-navigation/native";

// typings
import { OrderRouteProp, OrdersNavProp } from "../../typings";
import DeliveryCard from "../../components/DeliveryCard";

const OrderDetails = () => {
  const nav = useNavigation<OrdersNavProp>();
  const {
    params: { order },
  } = useRoute<OrderRouteProp>();

  useLayoutEffect(() => {
    nav.setOptions({
      headerTitle: order.trackingItems.customer.name,
      headerTintColor: "#EB6A7C",
      headerTitleStyle: { color: "black" },
      headerBackTitle: "Deliveries",
    });
  }, []);

  return (
    <View className="flex-1">
      <DeliveryCard order={order} fullWidth />
    </View>
  );
};

export default OrderDetails;
