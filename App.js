import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MealsNavigator from './src/navigation/Navigator';
import {enableScreens} from 'react-native-screens';
enableScreens();
const App = () => {
  return <MealsNavigator />;
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
