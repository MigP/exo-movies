import { useState } from "react";
import axios from "axios";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Details({ navigation }) {

    const [movieId, setMovieId] = useState(610150)
    const [movieTitle, setMovieTitle] = useState("")
    const [movieDescription, setMovieDescription] = useState("")
    const [movieGenres, setMovieGenres] = useState([])
    const [moviePoster, setMoviePoster] = useState("")

    const getMovieDetails = async () => {
        const movieDetailsResponse = await axios.get("https://api.themoviedb.org/3/movie/" + movieId + "?api_key=c9e23b610c2f0c1040a493fc10ce5aaf&language=en-US")
        let movieDetails = movieDetailsResponse.data
      
        return movieDetails
    }

    const fetchMovieDetails = () => {
        getMovieDetails()
        .then(
            (data) => {
                let genres = []

                for(i = 0; i < data.genres.length; i++) {
                    genres.push(data.genres[i].name)
                }
                setMovieTitle((p) => p = data.title)
                setMovieDescription((p) => p = data.overview)
                setMovieGenres((p) => p = genres)
                setMoviePoster((p) => p = 'https://image.tmdb.org/t/p/original' + data.poster_path)

                console.log(movieTitle)
                console.log(movieDescription)
                console.log(movieGenres)
                console.log(moviePoster)
            }

        )
        .catch((err) => console.log(err))
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text onPress={fetchMovieDetails}>Movie details</Text>
      </View>
    );
  }