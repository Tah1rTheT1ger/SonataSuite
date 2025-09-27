import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Sound from 'react-native-sound';
import HapticFeedback from 'react-native-haptic-feedback';

Sound.setCategory('Playback');

const keys = [
    { name: 'A0', type: 'white', soundFile: 'grandpiano_a0.mp3' }, { name: 'A#0', type: 'black', soundFile: 'grandpiano_bb0.mp3' }, { name: 'B0', type: 'white', soundFile: 'grandpiano_b0.mp3' },
    { name: 'C1', type: 'white', soundFile: 'grandpiano_c1.mp3' }, { name: 'C#1', type: 'black', soundFile: 'grandpiano_db1.mp3' }, { name: 'D1', type: 'white', soundFile: 'grandpiano_d1.mp3' }, { name: 'D#1', type: 'black', soundFile: 'grandpiano_eb1.mp3' }, { name: 'E1', type: 'white', soundFile: 'grandpiano_e1.mp3' }, { name: 'F1', type: 'white', soundFile: 'grandpiano_f1.mp3' }, { name: 'F#1', type: 'black', soundFile: 'grandpiano_gb1.mp3' }, { name: 'G1', type: 'white', soundFile: 'grandpiano_g1.mp3' }, { name: 'G#1', type: 'black', soundFile: 'grandpiano_ab1.mp3' }, { name: 'A1', type: 'white', soundFile: 'grandpiano_a1.mp3' }, { name: 'A#1', type: 'black', soundFile: 'grandpiano_bb1.mp3' }, { name: 'B1', type: 'white', soundFile: 'grandpiano_b1.mp3' },
    { name: 'C2', type: 'white', soundFile: 'grandpiano_c2.mp3' }, { name: 'C#2', type: 'black', soundFile: 'grandpiano_db2.mp3' }, { name: 'D2', type: 'white', soundFile: 'grandpiano_d2.mp3' }, { name: 'D#2', type: 'black', soundFile: 'grandpiano_eb2.mp3' }, { name: 'E2', type: 'white', soundFile: 'grandpiano_e2.mp3' }, { name: 'F2', type: 'white', soundFile: 'grandpiano_f2.mp3' }, { name: 'F#2', type: 'black', soundFile: 'grandpiano_gb2.mp3' }, { name: 'G2', type: 'white', soundFile: 'grandpiano_g2.mp3' }, { name: 'G#2', type: 'black', soundFile: 'grandpiano_ab2.mp3' }, { name: 'A2', type: 'white', soundFile: 'grandpiano_a2.mp3' }, { name: 'A#2', type: 'black', soundFile: 'grandpiano_bb2.mp3' }, { name: 'B2', type: 'white', soundFile: 'grandpiano_b2.mp3' },
    { name: 'C3', type: 'white', soundFile: 'grandpiano_c3.mp3' }, { name: 'C#3', type: 'black', soundFile: 'grandpiano_db3.mp3' }, { name: 'D3', type: 'white', soundFile: 'grandpiano_d3.mp3' }, { name: 'D#3', type: 'black', soundFile: 'grandpiano_eb3.mp3' }, { name: 'E3', type: 'white', soundFile: 'grandpiano_e3.mp3' }, { name: 'F3', type: 'white', soundFile: 'grandpiano_f3.mp3' }, { name: 'F#3', type: 'black', soundFile: 'grandpiano_gb3.mp3' }, { name: 'G3', type: 'white', soundFile: 'grandpiano_g3.mp3' }, { name: 'G#3', type: 'black', soundFile: 'grandpiano_ab3.mp3' }, { name: 'A3', type: 'white', soundFile: 'grandpiano_a3.mp3' }, { name: 'A#3', type: 'black', soundFile: 'grandpiano_bb3.mp3' }, { name: 'B3', type: 'white', soundFile: 'grandpiano_b3.mp3' },
    { name: 'C4', type: 'white', soundFile: 'grandpiano_c4.mp3' }, { name: 'C#4', type: 'black', soundFile: 'grandpiano_db4.mp3' }, { name: 'D4', type: 'white', soundFile: 'grandpiano_d4.mp3' }, { name: 'D#4', type: 'black', soundFile: 'grandpiano_eb4.mp3' }, { name: 'E4', type: 'white', soundFile: 'grandpiano_e4.mp3' }, { name: 'F4', type: 'white', soundFile: 'grandpiano_f4.mp3' }, { name: 'F#4', type: 'black', soundFile: 'grandpiano_gb4.mp3' }, { name: 'G4', type: 'white', soundFile: 'grandpiano_g4.mp3' }, { name: 'G#4', type: 'black', soundFile: 'grandpiano_ab4.mp3' }, { name: 'A4', type: 'white', soundFile: 'grandpiano_a4.mp3' }, { name: 'A#4', type: 'black', soundFile: 'grandpiano_bb4.mp3' }, { name: 'B4', type: 'white', soundFile: 'grandpiano_b4.mp3' },
    { name: 'C5', type: 'white', soundFile: 'grandpiano_c5.mp3' }, { name: 'C#5', type: 'black', soundFile: 'grandpiano_db5.mp3' }, { name: 'D5', type: 'white', soundFile: 'grandpiano_d5.mp3' }, { name: 'D#5', type: 'black', soundFile: 'grandpiano_eb5.mp3' }, { name: 'E5', type: 'white', soundFile: 'grandpiano_e5.mp3' }, { name: 'F5', type: 'white', soundFile: 'grandpiano_f5.mp3' }, { name: 'F#5', type: 'black', soundFile: 'grandpiano_gb5.mp3' }, { name: 'G5', type: 'white', soundFile: 'grandpiano_g5.mp3' }, { name: 'G#5', type: 'black', soundFile: 'grandpiano_ab5.mp3' }, { name: 'A5', type: 'white', soundFile: 'grandpiano_a5.mp3' }, { name: 'A#5', type: 'black', soundFile: 'grandpiano_bb5.mp3' }, { name: 'B5', type: 'white', soundFile: 'grandpiano_b5.mp3' },
    { name: 'C6', type: 'white', soundFile: 'grandpiano_c6.mp3' }, { name: 'C#6', type: 'black', soundFile: 'grandpiano_db6.mp3' }, { name: 'D6', type: 'white', soundFile: 'grandpiano_d6.mp3' }, { name: 'D#6', type: 'black', soundFile: 'grandpiano_eb6.mp3' }, { name: 'E6', type: 'white', soundFile: 'grandpiano_e6.mp3' }, { name: 'F6', type: 'white', soundFile: 'grandpiano_f6.mp3' }, { name: 'F#6', type: 'black', soundFile: 'grandpiano_gb6.mp3' }, { name: 'G6', type: 'white', soundFile: 'grandpiano_g6.mp3' }, { name: 'G#6', type: 'black', soundFile: 'grandpiano_ab6.mp3' }, { name: 'A6', type: 'white', soundFile: 'grandpiano_a6.mp3' }, { name: 'A#6', type: 'black', soundFile: 'grandpiano_bb6.mp3' }, { name: 'B6', type: 'white', soundFile: 'grandpiano_b6.mp3' },
    { name: 'C7', type: 'white', soundFile: 'grandpiano_c7.mp3' }, { name: 'C#7', type: 'black', soundFile: 'grandpiano_db7.mp3' }, { name: 'D7', type: 'white', soundFile: 'grandpiano_d7.mp3' }, { name: 'D#7', type: 'black', soundFile: 'grandpiano_eb7.mp3' }, { name: 'E7', type: 'white', soundFile: 'grandpiano_e7.mp3' }, { name: 'F7', type: 'white', soundFile: 'grandpiano_f7.mp3' }, { name: 'F#7', type: 'black', soundFile: 'grandpiano_gb7.mp3' }, { name: 'G7', type: 'white', soundFile: 'grandpiano_g7.mp3' }, { name: 'G#7', type: 'black', soundFile: 'grandpiano_ab7.mp3' }, { name: 'A7', type: 'white', soundFile: 'grandpiano_a7.mp3' }, { name: 'A#7', type: 'black', soundFile: 'grandpiano_bb7.mp3' }, { name: 'B7', type: 'white', soundFile: 'grandpiano_b7.mp3' },
    { name: 'C8', type: 'white', soundFile: 'grandpiano_c8.mp3' },
];

const sounds = keys.reduce((acc, key) => {
  const sound = new Sound(key.soundFile, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log(`failed to load the sound ${key.soundFile}`, error);
    }
  });
  sound.setVolume(1.0);
  acc[key.name] = sound;
  return acc;
}, {});

const GrandPiano = () => {
  const [activeKeys, setActiveKeys] = useState(new Set());

  const playSound = (keyName) => {
    HapticFeedback.trigger('impactLight');
    const sound = sounds[keyName];
    if (sound) {
        sound.stop(() => sound.play());
    }
    setActiveKeys(prev => new Set(prev.add(keyName)));
    setTimeout(() => {
        setActiveKeys(prev => {
            const next = new Set(prev);
            next.delete(keyName);
            return next;
        });
    }, 200);
  };

  const renderPiano = () => {
      let whiteKeyCount = 0;
      const pianoKeys = keys.map((key, index) => {
          if (key.type === 'white') {
              whiteKeyCount++;
              return (
                  <TouchableOpacity
                      key={key.name}
                      style={[
                          styles.whiteKey,
                          activeKeys.has(key.name) && styles.whiteKeyActive,
                      ]}
                      onPress={() => playSound(key.name)}
                  >
                      <Text style={styles.keyText}>{key.name}</Text>
                  </TouchableOpacity>
              );
          }
      });

      whiteKeyCount = 0;
      const blackPianoKeys = keys.map((key, index) => {
          if (key.type === 'white') {
            whiteKeyCount++;
          } else if (key.type === 'black') {
              const top = whiteKeyCount * styles.whiteKey.height - (styles.blackKey.height / 2);
              return (
                  <TouchableOpacity
                      key={key.name}
                      style={[
                          styles.blackKey,
                          { top: top },
                          activeKeys.has(key.name) && styles.blackKeyActive,
                      ]}
                      onPress={() => playSound(key.name)}
                  >
                      <Text style={[styles.keyText, styles.blackKeyText]}>{key.name}</Text>
                  </TouchableOpacity>
              );
          }
          return null;
      });

      return <View style={styles.pianoContainer}>{pianoKeys}{blackPianoKeys}</View>
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {renderPiano()}
      </ScrollView>
    </View>
  );
};

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    width: '100%',
  },
  pianoContainer: {
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
  },
  whiteKey: {
    height: screenHeight / 10,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  whiteKeyActive: {
    backgroundColor: '#c0c0c0',
  },
  blackKey: {
    position: 'absolute',
    right: 0,
    height: screenHeight / 15,
    width: '60%',
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: '#222222',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  blackKeyActive: {
    backgroundColor: '#333333',
  },
  keyText: {
    color: '#000000',
    fontWeight: 'bold',
  },
  blackKeyText: {
    color: '#FFFFFF',
  },
});

export default GrandPiano;
