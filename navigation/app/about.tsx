import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        This is a simple app built with React Native and Expo. We aim to provide
        an intuitive and fast experience for our users.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Alinha verticalmente
    alignItems: "center", // Alinha horizontalmente
    backgroundColor: "#f0f4f8", // Cor de fundo suave
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2D3E50", // Cor escura para o título
    marginBottom: 20, // Espaçamento entre o título e a descrição
  },
  description: {
    fontSize: 18,
    color: "#6C7B8B", // Cor mais suave para o texto
    textAlign: "center", // Texto centralizado
    lineHeight: 24, // Melhor espaçamento entre as linhas
    marginHorizontal: 20, // Espaçamento das laterais
  },
});
