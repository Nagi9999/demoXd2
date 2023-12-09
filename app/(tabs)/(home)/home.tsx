import React from "react";
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Pressable,
  SectionList,
  FlatList,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import MovieCard from "../../../components/MovieCard";
import moviesList from "../../../data.json";
import groupedMoviesList from "../../../grouped-data.json"



const HomePage = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <StatusBar barStyle={"dark-content"} />
        <Pressable
          onPress={() => {
            router.push("/SignInScreen");
          }}
        >
          <Ionicons
            name="arrow-back-outline"
            size={24}
            color="black"
            style={styles.backIcon}
          />
        </Pressable>


        <ScrollView style={styles.groupedList}>
        <Text style={styles.typeStyle}>Bestselling</Text>
        <FlatList
          data={moviesList}
          renderItem={({ item }) => {
            return (
              <MovieCard
                key={item.id}
                image={item.image}
                type={item.type}
                movie={item.movie}
                director={item.director}
                rating={parseInt(item.rating)}
                reviews={item.reviews}
              />
            );
          }}
          horizontal={true}
          ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        />

        <Text style={styles.typeStyle}>Biography</Text>
        <FlatList
          data={moviesList}
          renderItem={({ item }) => {
            return (
              <MovieCard
                key={item.id}
                image={item.image}
                type={item.type}
                movie={item.movie}
                director={item.director}
                rating={parseInt(item.rating)}
                reviews={item.reviews}
              />
            );
          }}
          horizontal={true}
          ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        />

        <Text style={styles.typeStyle}>Drama</Text>
        <FlatList
          data={moviesList}
          renderItem={({ item }) => {
            return (
              <MovieCard
                key={item.id}
                image={item.image}
                type={item.type}
                movie={item.movie}
                director={item.director}
                rating={parseInt(item.rating)}
                reviews={item.reviews}
              />
            );
          }}
          horizontal={true}
          ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        />
        </ScrollView>
        
        {/* <SectionList 
        sections={groupedMoviesList}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item}</Text>
            </View>
          );
        }}
        
        renderSectionHeader={({section}) => (
          <Text>{section.type}</Text>
        )}
        /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  backIcon: {
    paddingTop: 60,
    marginHorizontal: 10,
  },
  groupedList:{
    marginTop:20,
    marginBottom:40
  },
  typeStyle:{
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 6,
    marginTop: 9,
    marginBottom:20
  }
});

export default HomePage;
