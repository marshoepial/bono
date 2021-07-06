import React from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';
import { useKeepAwake } from '@sayem314/react-native-keep-awake';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DripsyProvider } from '@dripsy/core';
import Navbar from './components/Navbar';
import MapScreen from './screens/MapScreen';
import mainTheme from './theme';

const Stack = createStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  if (__DEV__) {
    useKeepAwake();
  }

  return (
    <DripsyProvider theme={mainTheme}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor="#ED6826" />
        {/* <Navbar /> */}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Map"
              component={MapScreen}
              options={{
                title: 'Breadster',
                headerStyle: {
                  backgroundColor: '#ED6826', // todo, figure out how to fit this to themeui
                },
                headerTitleStyle: {
                  color: '#ffffff',
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </DripsyProvider>
  );
};

export default App;
