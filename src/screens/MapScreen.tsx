import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import {
  PermissionsAndroid,
  Platform,
  StyleSheet, View,
} from 'react-native';
import Config from 'react-native-config';
import MapView, { UrlTile } from 'react-native-maps';
import EventsScreen from './EventsScreen';

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
  },
});

const Tab = createMaterialTopTabNavigator();

const template = `https://api.maptiler.com/maps/streets/{z}/{x}/{y}@2x.png?key=${Config.MAPTILER_API}`;

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
          provider={null}
          mapType={Platform.OS === 'android' ? 'none' : 'standard'}
          showsUserLocation
          showsMyLocationButton={false}
          onMapReady={() => {
            if (Platform.OS === 'android') {
              PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              );
            }
          }}
        >
          <UrlTile
            urlTemplate={template}
            flipY={false}
            maximumZ={50}
            shouldReplaceMapContent
          />
        </MapView>
      </View>
      <View style={{ flex: 1.2 }}>
        <Tab.Navigator
          tabBarOptions={{
            style: {
              backgroundColor: '#E87D48',
            },
            indicatorStyle: {
              backgroundColor: '#E8236B',
            },
            labelStyle: {
              color: '#fff',
            },
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
