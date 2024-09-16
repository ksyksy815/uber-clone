import { View, Text, FlatList } from "react-native";
import React from "react";
import RideLayout from "@/components/RideLayout";
import DriverCard from "@/components/DriverCard";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { useDriverStore } from "@/store";

export default function ConfirmRide() {
  const { drivers, selectedDriver, setSelectedDriver } = useDriverStore();

  return (
    <RideLayout title="Choose a Driver" snapPoints={["65%", "85%"]}>
      <FlatList
        data={drivers}
        renderItem={(item) => (
          <DriverCard
            key={item.id}
            item={item}
            selected={selectedDriver}
            setSelected={setSelectedDriver}
          />
        )}
        ListFooterComponent={() => (
          <View className="mx-5 mt-10">
            <CustomButton
              title="Select Ride"
              onPress={() => router.push("/(root)/book-ride")}
            />
          </View>
        )}
      />
    </RideLayout>
  );
}
