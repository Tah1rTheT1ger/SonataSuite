
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AcousticGuitar = () => {
  return (
    <View style={styles.root}>
      <Text>Acoustic Guitar Screen</Text>
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

export default AcousticGuitar;
