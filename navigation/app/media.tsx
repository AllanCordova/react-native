import { View, StyleSheet, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function media() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Welcome to Media</Text>

        <Link style={styles.link} href="/profile">
          Go to Profile
        </Link>

        <Link style={styles.link} href="/feed">
          Go to feed
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7f7f7", // Light background for a clean look
    padding: 20,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    maxWidth: 960,
    marginVertical: 10, // Space between sections
    alignItems: "center", // Centers everything inside each view
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2D3E50", // Dark color for the title
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#6C7B8B", // Softer color for the subtitle
    marginBottom: 30,
  },
  link: {
    fontSize: 18,
    color: "#007BFF", // Blue color for the link
    fontWeight: "500",
    marginBottom: 20,
    textDecorationLine: "underline",
  },
});
