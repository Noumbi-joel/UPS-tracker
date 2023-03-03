import React, { useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// rne
import { Image, Input } from "@rneui/themed";

// hooks
import useCustomers from "../../hooks/useCustomers";

// comp
import CustomerCard from "../../components/CustomerCard";

// types
import { CustomerResponse } from "../../typings";

const CustomerScreen = () => {
  const [input, setInput] = useState<string>("");
  const { loading, error, data } = useCustomers();
  return (
    // @ts-ignore
    <SafeAreaView className="bg-[#59C1CC] flex-1">
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

        {data?.getCustomers.map(
          ({ name: ID, value: { email, name } }: CustomerResponse) => (
            <CustomerCard key={ID} email={email} name={name} userId={ID} />
          )
        )}
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
