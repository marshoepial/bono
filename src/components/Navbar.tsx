import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const navbarStyles = StyleSheet.create({
  navView: {
    width: '100%',
    height: 50,
    backgroundColor: 'coral',
    alignItems: 'center',
  },
  headerText: {
    height: '100%',
    fontSize: 25,
    fontWeight: '600',
    flex: 1,
    color: 'white',
    lineHeight: 50,
    marginTop: 2,
  },
});

const Navbar = () => (
  <View style={navbarStyles.navView}>
    <Text style={navbarStyles.headerText}>{`bono ${__DEV__ ? '[dev]' : ''}`}</Text>
  </View>
);

export { Navbar as default };
