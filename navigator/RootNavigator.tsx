import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

// rn navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// tab navigator
import TabNavigator from "./TabNavigator";

// screens
import ModalScreen from "../screens/modal";
import OrderDetails from "../screens/orderDetails";

// init Root stack
const RootStack = createNativeStackNavigator();

export type RootStackParamList = {
  Main: undefined;
  MyModal: { userId: string; name: string };
  Order: { order: any };
};

const RootNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Group screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="Main" component={TabNavigator} />
          </RootStack.Group>

          <RootStack.Group screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="MyModal" component={ModalScreen} />
          </RootStack.Group>

          <RootStack.Group>
            <RootStack.Screen name="Order" component={OrderDetails} />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigator;
