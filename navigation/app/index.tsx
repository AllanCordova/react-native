import { Button, StyleSheet, Text, View } from "react-native";
import { Link, Stack, useRouter } from "expo-router";

export default function Page() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `Home` }}></Stack.Screen>
      <View style={styles.main}>
        <Text style={styles.title}>Welcome to My App</Text>
        <Text style={styles.subtitle}>Explore the features</Text>
        <Link style={styles.link} href="/about">
          Go to About
        </Link>

        <Link style={styles.link} href="/media">
          Go to media
        </Link>

        <Button
          onPress={() => router.push("/users/10")}
          title="Go to Users"
          color="#007BFF"
        />
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
