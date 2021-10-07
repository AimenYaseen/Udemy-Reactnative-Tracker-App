import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { PolyLine } from "react-native-maps";

const TrackDetailsScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");

  const track = state.find((t) => t._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <>
      <Text style={{ fontSize: 48 }}>{track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
      >
        <PolyLine
          coordinates={track.locations.map((loc) => loc.coords)}
          lineDashPattern={[1]}
        />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default TrackDetailsScreen;
