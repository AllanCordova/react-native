import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

export default function Profile() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `User ${id}` }}></Stack.Screen>
      <View style={styles.main}>
        <Text>User number {id}!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
