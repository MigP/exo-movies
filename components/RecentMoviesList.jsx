import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
} from "react-native";

export default function RecentMoviesList(props) {
  // Props
  const { recentMovies } = props;

  const Item = ({ id, title, poster }) => (
    <View style={styles.listItems}>
      <Image style={styles.poster} source={{ uri: poster }}></Image>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item, index }) => (
    <Item title={item.title} poster={item.poster} />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={recentMovies}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listItems: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  title: {
    paddingStart: 15
  },
  poster: {
    aspectRatio: 624 / 937,
    width: 125,
  },
});
