import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const CustomNavbar = ({ title }) => {

  return(
    <View style={styles.container} >
      <View style={styles.sectionOne}>
        <Pressable >
          <Text>Back</Text>
        </Pressable>
      </View>
      <View style={styles.sectionTwo}>
        <Text style={styles.textTwo}>{title}</Text>
      </View>
      <View style={styles.sectionThree}>
        <Text>Part 3</Text>
      </View>
    </View>
  );
}

CustomNavbar.PropTypes = {
  title: PropTypes.string,
};

CustomNavbar.defaultProps = {
  title: 'Titulo',
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 60,
    flex: 1,
    flexDirection: 'row',
    borderColor: 'red',
    borderWidth: 1,
  },
  sectionOne: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
  },
  sectionTwo: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
  },
  textTwo: {
    fontSize: 20,
  },
  sectionThree: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
  }
});

export default CustomNavbar;
