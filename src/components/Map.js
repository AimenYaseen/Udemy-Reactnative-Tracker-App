import React from "react";
import { Text } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const Map = () => {
  return <MapView />;
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
