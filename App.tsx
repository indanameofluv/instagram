import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignedInStack from './navigation';

import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {
  return (
    <SignedInStack />
  );
}

