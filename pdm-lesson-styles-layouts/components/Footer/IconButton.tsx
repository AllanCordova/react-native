import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { ReactNode } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

type IconButtonProps = {
  icon: ReactNode;
  text: string;
  active?: boolean;
} & TouchableOpacityProps;

export default function IconButton({ icon, text, active }: IconButtonProps) {
  const color = active ? "white" : "grey";

  return (
    <TouchableOpacity style={styles.container}>
      <AntDesign name={icon as any} size={24} color={color} />

      <Text style={[styles.text, { color }]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    fontSize: 10,
  },
});
