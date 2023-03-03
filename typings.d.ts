import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./navigator/RootNavigator";
import { TabStackParamList } from "./navigator/TabNavigator";

type Customer = {
  email: string;
  name: string;
};

type CustomerList = {
  name: ID;
  value: Customer;
};

type TrackingItem = {
  customer_id: ID;
  customer: Customer;
  items: Item[];
};

type Item = {
  item_id: ID;
  name: string;
  price: number;
  quantity: number;
};

type OrderResponse = {
  value: Order;
};

type CustomerResponse = {
  name: ID;
  value: Customer;
};

type Order = {
  carrier: string;
  createdAt: string;
  shippingCost: number;
  trackingId: string;
  trackingItems: TrackingItem;
  Lat: number;
  Lng: number;
  Address: string;
  City: string;
};

type CustomerNavProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>;
