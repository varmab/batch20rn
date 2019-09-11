import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './components/Welcome';
import Counter from './components/Counter';

export default function App() {
  return (
    <View style={{flex:1}}>
       <Counter/>
    </View>
  );
}

