import React from "react";
import { Text } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: 37.33233 + i * 0.001, // 0.001 means
        longitude: -122.03121 + i * 0.001,
      });
    } else {
      points.push({
        latitude: 37.33233 - i * 0.002,
        longitude: -122.03121 - i * 0.001,
      });
    }
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.33233, // define center
        longitude: -122.03121,
        latitudeDelta: 0.01, // zoom properties
        longitudeDelta: 0.01,
      }}
    >
      <Polyline coordinates={points} lineDashPattern={[1]} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
