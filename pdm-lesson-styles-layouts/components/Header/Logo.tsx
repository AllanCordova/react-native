import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import theme from "@/contants/theme";

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png",
        }}
        style={styles.image}
      />

      <Text style={styles.text}>Início</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.dimension.sm,
  },
  image: { width: 28, height: 48 },
  text: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
