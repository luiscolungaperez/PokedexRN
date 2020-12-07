import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PokeStack from './src/components/Pokemon/PokeStack';

const App = () => {
  return(
    <NavigationContainer>
      <PokeStack /> 
    </NavigationContainer>
  );
};


export default App;
