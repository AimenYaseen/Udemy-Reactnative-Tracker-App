import "../_mockLocation";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import Map from "../components/Map";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = () => {
  const [errorR, setErrorR] = useState(null);

  const startRecording = async () => {
    try {
      await requestForegroundPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {}
      );
    } catch (err) {
      setErrorR(err);
    }
  };

  useEffect(() => {
    startRecording();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2 style={styles.text}>
        Track Create Screen
      </Text>
      <Map />
      {errorR ? <Text>Please enable Location Services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    marginTop: 40,
  },
});

export default TrackCreateScreen;
