import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native';
import CustomNavbar from '../CustomNarbar/CustomNavbar';

const PokeList = ({ navigation }) => {

  const goToPokemon = () => {
    navigation.navigate('Pokemon');
  }

  return(
    <View style={styles.container} >
      <CustomNavbar navigation={navigation} />
      <View style={styles.content} >
        <Text style={styles.text} >Hola mundo aqui es mi primer router</Text>
        <Pressable style={styles.btn} onPress={goToPokemon} >
          <Text style={styles.btnText} >Ver los detalles</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee'
  },
  text: {
    fontSize: 20
  },
  btn: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 25
  },
  btnText: {
    fontSize: 16,
    color: '#fff'
  }
})

export default PokeList;
