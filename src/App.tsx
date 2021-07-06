import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { useKeepAwake } from '@sayem314/react-native-keep-awake';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Navbar } from './components/Navbar';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  if (__DEV__) {
    useKeepAwake();
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navbar />
    </SafeAreaView>
  );
};

export default App;
