
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InstrumentHub = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Sonata Suite</Text>
      <Button
        title="Grand Piano 🎹"
        onPress={() => navigation.navigate('GrandPiano')}
      />
      <Button
        title="Drum Pad Kit 🥁"
        onPress={() => navigation.navigate('DrumPadKit')}
      />
      <Button
        title="Acoustic Guitar 🎸"
        onPress={() => navigation.navigate('AcousticGuitar')}
      />
      <Button
        title="Concert Violin 🎻"
        onPress={() => navigation.navigate('ConcertViolin')}
      />
      <Button
        title="Pan Flute 🎶"
        onPress={() => navigation.navigate('PanFlute')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default InstrumentHub;
