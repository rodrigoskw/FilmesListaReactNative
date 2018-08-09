import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class MovieCard extends React.Component {
  render() {

    var FilmeUrl = this.props.FilmeUrl

    return (
      <View style={styles.container}>
        <View>
          <View style={{borderBottomWidth:10, borderColor:'#FFFFFF'}} >
            <Image
              resizeMode={'cover'}
              style={styles.imagem}
              source={{uri:FilmeUrl}}
            />
          </View>
          <View style={styles.informacoes} >
            <View style={styles.filmenota}>
              <Text style={{ color:'#FFF', fontSize: 13}}>{this.props.FilmeNota}</Text>
            </View>
            <View style={styles.titulo} >
              <Text style={{fontWeight:'bold'}} >{this.props.FilmeTitulo}</Text>
              <Text style={{color:'#808B96'}} >{this.props.FilmeData}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingBottom: 15
  },
  informacoes:{
    flexDirection: 'row'
  },
  imagem: {
    flex: 1,
    width: 390,
    height: 250,
    backgroundColor: '#ccc',
  },
  titulo: {
    borderColor: '#FFFF',
    borderLeftWidth: 15,
  },
  filmenota: {
    borderRadius: 40,
    backgroundColor: 'black',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderTopWidth: 3,
    borderColor: '#2ECC71'
  }
  
});