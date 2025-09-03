import { View, Text, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";
import React from "react";

type PostsType = {
  id: number;
  title: string;
  body: string;
};

export default function Feed() {
  const myPosts: PostsType[] = [
    { id: 1, title: "Post A", body: "Este é o corpo do post A" },
    { id: 2, title: "Post B", body: "Este é o corpo do post B" },
    { id: 3, title: "Post C", body: "Este é o corpo do post C" },
    { id: 4, title: "Post D", body: "Este é o corpo do post D" },
  ];

  const router = useRouter();

  return (
    <View style={styles.container}>
      {myPosts.map((post) => (
        <View key={post.id} style={styles.postContainer}>
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.body}>{post.body}</Text>
          <Button
            onPress={() => router.push(`/posts/${post.id}`)}
            title="Go to Users"
            color="#007BFF"
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  postContainer: {
    marginBottom: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  body: {
    fontSize: 14,
    color: "#555",
  },
});
