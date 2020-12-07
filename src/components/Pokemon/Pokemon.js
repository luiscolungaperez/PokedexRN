import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import CustomNavbar from '../CustomNarbar/CustomNavbar';

const Pokemon = ({ navigation }) => {

  const back = () => {
    navigation.goBack();
  }

  return(
    <View style={styles.container} >
      <CustomNavbar />
      <Text style={styles.text} >Aqui va el pokemon</Text>
      <Pressable onPress={back}>
        <Text>Regresar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  }
});

export default Pokemon;
