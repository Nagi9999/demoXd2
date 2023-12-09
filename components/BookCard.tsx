import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,

} from "react-native";
import {  Rating } from "react-native-ratings";

interface MoviesCardProps {
  image: string;
  type: string;
  book: string;
  director: string;
  reviews: string;
  rating: number;
}

const BookCard: React.FC<MoviesCardProps> = ({
  image,
  book,
  director,
  reviews,
  rating,
}) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: `${image}` }}
        resizeMode="contain"
      />

      <View style={styles.bookContainer}>
        <Text style={styles.bookText}>{book}</Text>
      </View>

      <View style={styles.directorContainer}>
        <Text style={styles.directorText}>by {director}</Text>
      </View>
      <View>
        <Rating
          type="custom"
          ratingColor="#ffcc00"
          imageSize={16}
          ratingBackgroundColor="#d1dddf"
          readonly
          jumpValue={0.5}
          fractions={5}
          ratingCount={5}
          startingValue={rating / 2}
          style={styles.ratingVlue}
        />
      </View>
      <View style={styles.reviewsContainer}>
        <Text style={styles.reviewsText}>{reviews} Reviews</Text>
      </View>
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  card: {
    width: 120,
    height: 295,
    backgroundColor: "white",
    marginLeft: 6,
  },

  image: {
    width: "100%",
    height: 180,
  },

  bookContainer: {
    marginTop: 10,
    width: 120,
    height: 40,
  },
  bookText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#242126",
  },

  directorContainer: {
    marginTop: 4,
    width: 120,
    height: 15,
  },
  directorText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#d1dddf",
  },
  ratingContainer: {
    marginLeft: 6,
  },
  ratingVlue:{
    marginTop:10,
    alignSelf: "flex-start"

  },
  reviewsContainer: {
    marginBottom: 8,
    marginTop:5
  },
  reviewsText: {
    fontSize: 12,
    color: "#d1dddf",
  },
});
