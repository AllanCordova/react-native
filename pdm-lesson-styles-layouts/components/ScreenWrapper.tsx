import theme from "@/contants/theme";
import React, { PropsWithChildren } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

export default function ScreenWrapper({ children }: PropsWithChildren) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: theme.backgroundColor,
    justifyContent: "space-between",
  },
});
