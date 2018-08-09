import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MovieCard from './src/moviecard/moviecard';
import { ScrollView, FlatList } from './node_modules/react-native-gesture-handler';
import axios from "axios";
import moment from "moment";

export default class App extends React.Component {

  state = {
    movies: [],
    loading: true
  }

  componentDidMount(){
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=48f24d99d1807a2d5986d297a0bd8f9f"
    axios.get(url).then((response) => {
        console.log(response.data.results);

        setTimeout(() => {
          this.setState({
              movies: response.data.results,
              loading: false
            });
        }, 5000);
    });
  }

  render() {
    return (
      <View>
        
        <View style={styles.header} >
          <Text style={{fontWeight:'bold'}}> The Movie Db </Text>
        </View>

        <View style={styles.container}>
          {
            this.state.loading ? 
            <Text>Loading ...</Text> : 
            <FlatList
              keyExtractor={(item) => item.id.toString()}
              data={this.state.movies}
              renderItem={({item}) => <MovieCard
                FilmeUrl={'https://image.tmdb.org/t/p/w500' + item.backdrop_path}
                FilmeNota={item.vote_average}
                FilmeTitulo={item.title}
                FilmeData={moment(item.release_date).format("DD/MM/YYYY")}
              />
            }
          />
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5
  },
  header: {
    height: 60,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
