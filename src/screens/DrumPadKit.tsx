
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Sound from 'react-native-sound';
import HapticFeedback from 'react-native-haptic-feedback';

Sound.setCategory('Playback');

// An array of sound filenames
const soundFiles = [
  'drumpadkit_kick.mp3',
  'drumpadkit_snare.mp3',
  'drumpadkit_hihat.mp3',
  'drumpadkit_tom1.mp3',
  'drumpadkit_tom2.mp3',
  'drumpadkit_tom3.mp3',
  'drumpadkit_crash.mp3',
  'drumpadkit_ride.mp3',
  'drumpadkit_clap.mp3',
  'drumpadkit_cowbell.mp3',
  'drumpadkit_rim.mp3',
  'drumpadkit_shaker.mp3',
];

const soundNames = [
  'Kick', 'Snare', 'Hi-Hat', 'Tom 1', 'Tom 2', 'Tom 3',
  'Crash', 'Ride', 'Clap', 'Cowbell', 'Rim', 'Shaker'
];

// Pre-load the sounds
const sounds = soundFiles.map(file => {
  return new Sound(file, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', file, error);
      return;
    }
  });
});

const numColumns = 3;
const { width: screenWidth } = Dimensions.get('window');
const gridWidth = screenWidth * 0.98;
const padWidth = gridWidth / numColumns - 10;

const DrumPadKit = () => {
  const [activePads, setActivePads] = useState<number[]>([]);

  const playSound = (index: number) => {
    const sound = sounds[index];
    if (sound) {
      sound.stop(() => {
        sound.play();
      });
    }
  };

  const handlePressIn = (index: number) => {
    setActivePads(prev => [...prev, index]);
    HapticFeedback.trigger('impactLight');
    playSound(index);
  };

  const handlePressOut = (index: number) => {
    setActivePads(prev => prev.filter(padIndex => padIndex !== index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drum Pad Kit</Text>
      <View style={styles.grid}>
        {soundNames.map((name, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.pad, activePads.includes(index) && styles.padActive]}
            onPressIn={() => handlePressIn(index)}
            onPressOut={() => handlePressOut(index)}
            activeOpacity={0.9} // Immediate feedback
          >
            <Text style={styles.padText}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a0a1a',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#e0e0e0',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  grid: {
    width: '98%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pad: {
    width: padWidth,
    aspectRatio: 1,
    backgroundColor: '#1c1c3a',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 10,
    borderWidth: 2,
    borderColor: '#3a3a5a',
  },
  padActive: {
    backgroundColor: '#8a2be2',
    borderColor: '#a45eff',
    transform: [{ scale: 1.05 }],
    shadowColor: '#a45eff',
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 20,
  },
  padText: {
    color: '#e0e0e0',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
});

export default DrumPadKit;