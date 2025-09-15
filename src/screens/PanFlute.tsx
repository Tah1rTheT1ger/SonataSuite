
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PanFlute = () => {
  return (
    <View style={styles.root}>
      <Text>Pan Flute Screen</Text>
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

export default PanFlute;
