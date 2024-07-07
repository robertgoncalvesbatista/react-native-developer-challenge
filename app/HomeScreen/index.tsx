import React from "react";
import { StyleSheet, View, FlatList, Text, Image } from "react-native";

const data = [
  { id: "1", title: "Card 1", image: "https://via.placeholder.com/150" },
  { id: "2", title: "Card 2", image: "https://via.placeholder.com/150" },
  { id: "3", title: "Card 3", image: "https://via.placeholder.com/150" },
  { id: "4", title: "Card 4", image: "https://via.placeholder.com/150" },
  { id: "5", title: "Card 5", image: "https://via.placeholder.com/150" },
  { id: "6", title: "Card 6", image: "https://via.placeholder.com/150" },
];

export default function HomeScreen() {
  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3, // For Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2, // For iOS
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
