import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MovieCard from './src/moviecard/moviecard';
import { ScrollView, FlatList } from './node_modules/react-native-gesture-handler';
import axios from "axios";
import moment from "moment";

export default class App extends React.Component {

    static navigationOptions = {
        title: 'Filmes',
        headerRight: (
            <Button
                onPress={() => alert('This is a buttom!')}
                title="Add"
                color="blue"
            />
        )
    };

  state = {
    movies: [],
    loading: true,
    page: 0
  }

  componentDidMount() {
    this.GetFilmes();
  }

  GetFilmes() {
    this.setState(
      {
        page: this.state.page +1
      }, () => {
        let url = "https://api.themoviedb.org/3/movie/popular?api_key=48f24d99d1807a2d5986d297a0bd8f9f&page=" + this.state.page;
        console.log(url)
        axios.get(url).then((response) => {
          this.setState({
            movies: this.state.movies.concat(response.data.results),
            loading: false
          });
        });
      }
    )

  }

  render() {
    return (
        <View style={styles.container}>
            <Button
                title={"Go to Page 2"}
                onPress={() => {this.props.navigation.navigate("Page2", {id:10});}}
            />
          {this.state.loading ? <Text>Loading ...</Text> :
              <FlatList
                keyExtractor={(item) => item.id.toString()}
                data={this.state.movies}
                renderItem={({ item }) => <MovieCard
                  FilmeUrl={'https://image.tmdb.org/t/p/w500' + item.backdrop_path}
                  FilmeNota={item.vote_average}
                  FilmeTitulo={item.title}
                  FilmeData={moment(item.release_date).format("DD/MM/YYYY")}
                />}
                onEndReached={() => this.GetFilmes()}
              />}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5
  }
});
