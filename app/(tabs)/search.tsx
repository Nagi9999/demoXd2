import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import moviesList from "../../data.json";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMovies = moviesList.filter((item) =>
    item.movie.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.searchSection}>
        <Feather name="search" size={15} color="#242126" style={styles.icon} />
        <TextInput
          placeholder="Search Books"
          secureTextEntry={false}
          style={styles.searchText}
          placeholderTextColor={"#afc1c4"}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          style={styles.searchList}
          data={filteredMovies}
          renderItem={({ item }) => {
            return (
              <View key={item.id} style={styles.ImageCard}>
                <Image source={{ uri: `${item.image}` }} style={styles.image} />
              </View>
            );
          }}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    height: 56,
    width: 335,
    marginHorizontal: 20,
    marginTop:20,
    borderRadius: 58,
    backgroundColor: "#edeff3",
    paddingLeft: 20,
    paddingRight: 10,
    opacity: 0.8,
  },
  icon: {
    marginRight: 10,
  },
  searchText: {
    flex: 1,
    color: "black",
    fontSize: 17,
    fontWeight: "500",
    letterSpacing: 1,
  },
  searchList: {
  },
  listContainer: {
    flex:1,
    marginHorizontal: 13,
    marginTop:10
  },

  ImageCard: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal:20,
    marginVertical:10
  },

  image: {
    width: 133,
    height: 200,
    borderWidth: 0.5,
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,0.1 )",
    filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.15 ))",
  },
});