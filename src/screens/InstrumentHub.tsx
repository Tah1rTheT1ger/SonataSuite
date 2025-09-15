
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const instruments = [
  { name: 'Grand Piano', icon: '🎹', screen: 'GrandPiano' },
  { name: 'Drum Pad Kit', icon: '🥁', screen: 'DrumPadKit' },
  { name: 'Acoustic Guitar', icon: '🎸', screen: 'AcousticGuitar' },
  { name: 'Concert Violin', icon: '🎻', screen: 'ConcertViolin' },
  { name: 'Pan Flute', icon: '🎶', screen: 'PanFlute' },
];

const InstrumentHub = () => {
  const navigation = useNavigation();

  const renderInstrumentCard = ({ item }: { item: typeof instruments[0] }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(item.screen as never)}
    >
      <Text style={styles.cardIcon}>{item.icon}</Text>
      <Text style={styles.cardText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sonata Suite</Text>
      <FlatList
        data={instruments}
        renderItem={renderInstrumentCard}
        keyExtractor={(item) => item.name}
        numColumns={2} // Display in a 2-column grid
        contentContainerStyle={styles.gridContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e', // Dark background for a sleek look
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#e0e0e0', // Light gray text
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  gridContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#2a2a4a', // Slightly lighter dark for cards
    borderRadius: 15,
    padding: 20,
    margin: 10,
    width: 160,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#3a3a5a',
  },
  cardIcon: {
    fontSize: 60,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e0e0e0',
    textAlign: 'center',
  },
});

export default InstrumentHub;
