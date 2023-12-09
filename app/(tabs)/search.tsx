import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import booksList from "../../data.json";


//search from data
const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = booksList.filter((item) =>
    item.book.toLowerCase().includes(searchQuery.toLowerCase())
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
          data={filteredBooks}
          renderItem={({ item }) => {
            return (
              <View key={item.id} style={styles.ImageCard}>
                <View style={styles.imageContainer}>
                  <Image source={{ uri: `${item.image}` }} style={styles.image} />
                </View>
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
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  imageContainer: {
    borderRadius: 4,
    overflow: "hidden", // Ensure the shadow is applied to the container, not the image
    borderWidth: 0.5,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: 200,
    
  },
  

  
});
