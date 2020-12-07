import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PokeList from './PokeList';
import Pokemon from './PokeList';

const stack = createStackNavigator();

const PokeStack = () => {
  const { Navigator, Screen } = stack;
  return(
    <Navigator>
      <Screen name='PokeHome' component={PokeList} />
      <Screen name='Pokemon' component={Pokemon} /> 
    </Navigator>
  );
}

export default PokeStack;
