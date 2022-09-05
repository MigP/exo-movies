import { useEffect, useState } from "react";
import axios from "axios";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import RecentMoviesList from "./RecentMoviesList"

export default function RecentMovies({ navigation }) {

    // State
    const [page, setPage] = useState(1)
    const [movieId, setMovieId] = useState(0)
    const [recentMovies, setRecentMovies] = useState([])
    const [movieTitle, setMovieTitle] = useState("")
    const [moviePoster, setMoviePoster] = useState("")

    const getRecentMovies = async () => {
        const recentMoviesResponse = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c9e23b610c2f0c1040a493fc10ce5aaf&language=en-US&page=" + page)
        let recentMovies = recentMoviesResponse.data
      
        return recentMovies
    }

    useEffect(() => {
        getRecentMovies()
        .then(
            (data) => {
                let movies = []

                for (let i = 0; i < data.results.length; i++) {

                    movies.push({id: data.results[i].id, title: data.results[i].title, poster: "https://image.tmdb.org/t/p/original" + data.results[i].poster_path})
                }
                setRecentMovies(movies)
            }
        )
        .catch((err) => console.log(err))
    }, [])

    return (
      <View style = {styles.moviesList}>
        <Text>List of recent movies</Text>
        <RecentMoviesList recentMovies = {recentMovies}></RecentMoviesList>
      </View>
    );
  }

  const styles = StyleSheet.create({
  moviesList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25
  }
});