import React, { useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// rne
import { Image, Input } from "@rneui/themed";

// hooks
import useCustomers from "../../hooks/useCustomers";

// comp
import CustomerCard from "../../components/CustomerCard";

// types
import { CustomerList, CustomerResponse } from "../../typings";

const CustomerScreen = () => {
  const [input, setInput] = useState<string>("");
  const { loading, error, data } = useCustomers();
  return (
    // @ts-ignore
    <SafeAreaView className="bg-[#59C1CC] flex-1">
      {/* Content */}
      <ScrollView>
        <Image
          source={{ uri: "https://links.papareact.com/3jc" }}
          containerStyle={styles.logo}
          PlaceholderContent={
            <ActivityIndicator size="large" color="#59C1CC" />
          }
        />

        <Input
          placeholder="Search by customer"
          value={input}
          onChangeText={setInput}
          containerStyle={styles.inputContainerStyle}
        />

        {data?.getCustomers
          ?.filter((customer: CustomerList) =>
            customer.value.name.includes(input)
          )
          .map(({ name: ID, value: { email, name } }: CustomerResponse) => (
            <CustomerCard
              key={ID}
              email={email}
              name={name}
              userId={ID}
            />
          ))}

        {loading && (
          <ActivityIndicator className="mt-5" color="white" size="large" />
        )}

        <View className="h-5" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 256,
  },
  inputContainerStyle: {
    backgroundColor: "white",
    paddingHorizontal: 40,
    paddingTop: 20,
    paddingBottom: 0,
  },
});

export default CustomerScreen;
