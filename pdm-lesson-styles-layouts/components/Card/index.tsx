import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Link } from "expo-router";

type MovieType = {
  id: number;
  image: { original: string };
};

export default function Card() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [moviesA, setMoviesA] = useState<MovieType[]>([]);

  useEffect(() => {
    async function getData() {
      const url = "https://api.tvmaze.com/shows";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const result: MovieType[] = await response.json();
        setMovies(result.slice(10, 50));
        setMoviesA(result.slice(50, 90));
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []);

  return (
    <View style={styles.main}>
      <ScrollView horizontal>
        <View style={styles.container}>
          {movies.map((movie) => (
            <View key={movie.id}>
              <Link href={`/movies/${movie.id}`}>
                <Image
                  style={styles.image}
                  source={{
                    uri: `${movie.image.original}`,
                  }}
                ></Image>
              </Link>
            </View>
          ))}
        </View>
      </ScrollView>
      <ScrollView horizontal>
        <View style={styles.container}>
          {moviesA.map((movie) => (
            <View key={movie.id}>
              <Link href={`/movies/${movie.id}`}>
                <Image
                  style={styles.image}
                  source={{
                    uri: `${movie.image.original}`,
                  }}
                ></Image>
              </Link>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    gap: 30,
  },
  container: {
    flexDirection: "row",
    gap: 8,
  },
  image: {
    width: 180,
    height: 240,
  },
});
