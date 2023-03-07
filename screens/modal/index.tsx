import { Text, View, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

// icons
import { Icon } from "@rneui/themed";

// rn nav
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { CompositeNavigationProp } from "@react-navigation/core";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigator/RootNavigator";
import useCustomerOrders from "../../hooks/useCustomerOrders";
import DeliveryCard from "../../components/DeliveryCard";

type ModalScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  NativeStackNavigationProp<RootStackParamList, "MyModal">
>;

type ModalScreenRouteProp = RouteProp<RootStackParamList, "MyModal">;

const ModalScreen = () => {
  const nav = useNavigation<ModalScreenNavigationProp>();

  const {
    params: { userId, name },
  } = useRoute<ModalScreenRouteProp>();

  const { loading, error, orders } = useCustomerOrders(userId);
  return (
    <SafeAreaView className="flex-1">
      <TouchableOpacity
        className="absolute top-10 right-5 z-10"
        onPress={() => nav.goBack()}
      >
        <Icon name="closecircle" type="antdesign" />
      </TouchableOpacity>

      <View className="mt-3">
        <View className="border-b py-6 border-b-[#59C1CC]">
          <Text className="text-center text-xl font-bold text-[#59C1CC]">
            {name}
          </Text>
          <Text className="text-center italic text-sm">Deliveries</Text>
        </View>
      </View>

      <FlatList
        contentContainerStyle={{ paddingBottom: 50 }}
        data={orders}
        keyExtractor={(order) => order.trackingId}
        renderItem={({ item: order }) => <DeliveryCard order={order} />}
      />
    </SafeAreaView>
  );
};

export default ModalScreen;
