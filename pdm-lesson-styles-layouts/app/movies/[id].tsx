import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";

type MovieDetailType = {
  id: number;
  name: string;
  summary: string;
  image: {
    original: string;
  };
  rating: {
    average: number | null;
  };
  genres: string[];
};

export default function MovieDetailScreen() {
  const { id } = useLocalSearchParams();

  const [movie, setMovie] = useState<MovieDetailType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        if (!response.ok) {
          throw new Error("Filme não encontrado.");
        }
        const data: MovieDetailType = await response.json();
        setMovie(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Ocorreu um erro.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#E50914" />
        <Text style={styles.messageText}>Carregando...</Text>
      </View>
    );
  }

  if (error || !movie) {
    return (
      <View style={styles.centered}>
        <Text style={styles.messageText}>
          {error || "Filme não encontrado."}
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: movie.image.original }} style={styles.poster} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{movie.name}</Text>

        <View style={styles.metadataContainer}>
          {movie.rating?.average && (
            <Text style={styles.rating}>Nota: {movie.rating.average} / 10</Text>
          )}
          <Text style={styles.genres}>{movie.genres.join(" • ")}</Text>
        </View>

        <Text style={styles.summaryTitle}>Sinopse</Text>
        <Text style={styles.summary}>
          {movie.summary.replace(/<[^>]*>?/gm, "")}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
  },
  poster: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
  },
  detailsContainer: {
    padding: 15,
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  metadataContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  rating: {
    color: "#46d369",
    fontWeight: "bold",
    fontSize: 16,
  },
  genres: {
    color: "#a0a0a0",
    marginLeft: 15,
    fontSize: 16,
  },
  summaryTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  summary: {
    color: "#E5E5E5",
    fontSize: 16,
    lineHeight: 24,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#141414",
  },
  messageText: {
    color: "#E5E5E5",
    marginTop: 10,
    fontSize: 16,
  },
});
