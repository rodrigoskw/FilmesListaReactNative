import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MovieCard from './src/moviecard/moviecard';
import { ScrollView, FlatList } from './node_modules/react-native-gesture-handler';
import axios from "axios";
import moment from "moment";

export default class Page2 extends React.Component {

    static navigationOptions = {
        title: 'Page 2',
        headerRight: (
            <Button
                onPress={() => alert('This is a buttom!')}
                title="Add"
                color="blue"
            />
        )
    };

  render() {
    return (
        <View style={styles.container}>
            <Text>Page 2</Text>
            <Text>ID: {this.props.navigation.getParam("id", 0)} </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5
  }
});
