import React from "react";

// rn navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import CustomerScreen from "../screens/customer";
import OrderScreen from "../screens/order";
import { Icon } from "@rneui/themed";

// init tab
const Tab = createBottomTabNavigator();

export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#59C1CC",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused }) => {
          if (route.name === "customers") {
            return (
              <Icon
                name="users"
                type="entypo"
                color={focused ? "#59C1CC" : "gray"}
              />
            );
          }
          if (route.name === "orders") {
            return (
              <Icon
                name="box"
                type="entypo"
                color={focused ? "#EB6A7C" : "gray"}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen name="customers" component={CustomerScreen} />
      <Tab.Screen name="orders" component={OrderScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
