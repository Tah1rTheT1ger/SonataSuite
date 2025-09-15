
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GrandPiano = () => {
  return (
    <View style={styles.root}>
      <Text>Grand Piano Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GrandPiano;
