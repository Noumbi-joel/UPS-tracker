import React from "react";

// rn navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import CustomerScreen from "../screens/customer";
import OrderScreen from "../screens/order";

// init tab
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="customer" component={CustomerScreen} />
      <Tab.Screen name="order" component={OrderScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
