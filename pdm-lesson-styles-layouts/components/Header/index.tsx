import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import theme from "@/contants/theme";
import Logo from "./Logo";
import Actions from "./Actions";

export default function Header() {
  return (
    <View style={styles.container}>
      <Logo />

      <Actions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: theme.dimension.xs,
    justifyContent: "space-between",
    paddingHorizontal: theme.dimension.xs,
  },
});
