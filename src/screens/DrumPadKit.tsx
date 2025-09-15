
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
  const [activePad, setActivePad] = useState<number | null>(null);

  const playSound = (index: number) => {
    const sound = sounds[index];
    if (sound) {
      sound.stop(() => {
        sound.play();
      });
    }
  };

  const handlePressIn = (index: number) => {
    setActivePad(index);
    HapticFeedback.trigger('impactLight');
    playSound(index);
  };

  const handlePressOut = () => {
    setActivePad(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {soundFiles.map((file, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.pad, activePad === index && styles.padActive]}
            onPressIn={() => handlePressIn(index)}
            onPressOut={handlePressOut}
            activeOpacity={0.9}
          >
            <Text style={styles.padText}>{file.split('.')[0]}</Text>
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
    backgroundColor: '#2c3e50',
  },
  grid: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  pad: {
    width: '30%',
    aspectRatio: 1,
    backgroundColor: '#34495e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#2c3e50',
  },
  padActive: {
    backgroundColor: '#e74c3c',
    borderColor: '#c0392b',
  },
  padText: {
    color: '#ecf0f1',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});

export default DrumPadKit;
