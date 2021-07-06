import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import MapView from 'react-native-maps-osmdroid';
import EventsScreen from './EventsScreen';

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    height: '200%',
    width: '200%',
    top: '-50%',
    left: '-50%',
    transform: [{ scale: 0.5 }],
  },
});

const Tab = createMaterialTopTabNavigator();

function MapScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <MapView
          style={styles.map}
          initialRegion={{ // Change this once we implement location services
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
      <View style={{ flex: 1.2 }}>
        <Tab.Navigator
          tabBarOptions={{
            style: {
              backgroundColor: '#ED6826'
            },
            indicatorStyle: {
              backgroundColor: '#26ABED',
            },
            labelStyle: {
              color: '#fff'
            }
          }}
        >
          <Tab.Screen name="Events" component={EventsScreen} />
          <Tab.Screen name="Posts" component={EventsScreen} />
        </Tab.Navigator>
      </View>
    </View>
  );
}

export { MapScreen as default };
