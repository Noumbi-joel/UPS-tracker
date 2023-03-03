import React from "react";

// rn navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import CustomerScreen from "../screens/customer";
import OrderScreen from "../screens/order";
import { Icon } from "@rneui/themed";

export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
};

// init tab
const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#59C1CC",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused }) => {
          if (route.name === "Customers") {
            return (
              <Icon
                name="users"
                type="entypo"
                color={focused ? "#59C1CC" : "gray"}
              />
            );
          }
          if (route.name === "Orders") {
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
      <Tab.Screen name="Customers" component={CustomerScreen} />
      <Tab.Screen name="Orders" component={OrderScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
