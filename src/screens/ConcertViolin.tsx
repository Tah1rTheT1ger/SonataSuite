
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ConcertViolin = () => {
  return (
    <View style={styles.root}>
      <Text>Concert Violin Screen</Text>
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

export default ConcertViolin;
