
import { enableScreens } from 'react-native-screens';
enableScreens();

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InstrumentHub from './src/screens/InstrumentHub';
import GrandPiano from './src/screens/GrandPiano';
import DrumPadKit from './src/screens/DrumPadKit';
import AcousticGuitar from './src/screens/AcousticGuitar';
import ConcertViolin from './src/screens/ConcertViolin';
import PanFlute from './src/screens/PanFlute';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InstrumentHub">
        <Stack.Screen name="InstrumentHub" component={InstrumentHub} options={{ title: 'Sonata Suite' }} />
        <Stack.Screen name="GrandPiano" component={GrandPiano} options={{ title: 'Grand Piano 🎹' }} />
        <Stack.Screen name="DrumPadKit" component={DrumPadKit} options={{ title: 'Drum Pad Kit 🥁' }} />
        <Stack.Screen name="AcousticGuitar" component={AcousticGuitar} options={{ title: 'Acoustic Guitar 🎸' }} />
        <Stack.Screen name="ConcertViolin" component={ConcertViolin} options={{ title: 'Concert Violin 🎻' }} />
        <Stack.Screen name="PanFlute" component={PanFlute} options={{ title: 'Pan Flute 🎶' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
