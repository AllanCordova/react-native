import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#141414",
        },
        headerTintColor: "#FFFFFF",
        headerShadowVisible: false,
        title: `séries`,
      }}
    ></Stack>
  );
}
