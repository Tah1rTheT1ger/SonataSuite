
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Sound from 'react-native-sound';
import HapticFeedback from 'react-native-haptic-feedback';

Sound.setCategory('Playback');

const soundFiles = [
  'kick.mp3',
  'snare.mp3',
  'hihat.mp3',
  'tom1.mp3',
  'tom2.mp3',
  'tom3.mp3',
  'crash.mp3',
  'ride.mp3',
  'clap.mp3',
  'cowbell.mp3',
  'rim.mp3',
  'shaker.mp3',
];

const sounds = soundFiles.map(file => {
  return new Sound(file, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', file, error);
      return;
    }
  });
});

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
        {soundFiles.map((file, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPressIn={() => handlePressIn(index)}
            onPressOut={() => handlePressOut(index)}
          >
            <View style={[styles.pad, activePads.includes(index) && styles.padActive]}>
              <Text style={styles.padText}>{file.split('.')[0]}</Text>
            </View>
          </TouchableWithoutFeedback>
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
    backgroundColor: '#0a0a1a', // Very dark background
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#e0e0e0',
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  grid: {
    width: '95%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  pad: {
    width: '30%',
    aspectRatio: 1,
    backgroundColor: '#1c1c3a', // Dark blue/purple for pads
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 2,
    borderColor: '#3a3a5a',
  },
  padActive: {
    backgroundColor: '#8a2be2', // Vibrant purple when active
    borderColor: '#6a0dad', // Darker purple border
    shadowOpacity: 0.9,
    shadowRadius: 12,
    elevation: 12,
  },
  padText: {
    color: '#e0e0e0',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default DrumPadKit;
