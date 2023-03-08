import React, { useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

// rn nav
import { useNavigation } from "@react-navigation/native";

// typings
import { OrdersNavProp } from "../../typings";

// hooks
import useOrders from "../../hooks/useOrders";

// comp
import { Button, Image } from "@rneui/themed";
import OrderCard from "../../components/OrderCard";

type Props = {};

const OrderScreen = (props: Props) => {
  const nav = useNavigation<OrdersNavProp>();

  const { loading, error, orders } = useOrders();
  const [ascending, setAscending] = useState<boolean>(false);

  return (
    <ScrollView className="flex-1 bg-[#EB67AC]">
      <Image
        source={{ uri: "https://links.papareact.com/m51" }}
        containerStyle={{ width: "100%", height: 256 }}
        PlaceholderContent={<ActivityIndicator />}
      />

      <View>
        <Button
          color="pink"
          titleStyle={{ color: "gray", fontWeight: "400" }}
          onPress={() => setAscending(!ascending)}
          containerStyle={{ paddingVertical: 8, paddingHorizontal: 20 }}
        >
          {ascending ? "Showing: Oldest First" : "Showing: Most Recent First"}
        </Button>

        {orders
          ?.sort((a, b) => {
            if (ascending) {
              return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
            } else {
              return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1;
            }
          })
          .map((order) => (
            <OrderCard key={order.trackingId} item={order} />
          ))}
      </View>
    </ScrollView>
  );
};

export default OrderScreen;
