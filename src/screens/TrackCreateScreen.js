import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import TrackForm from "../components/TrackForm";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);
  const callback = useContext(
    (location) => {
      //console.log("INSIDE", state.recording);
      addLocation(location, state.recording);
    },
    [state.recording]
  );
  // console.log("OUTSIDE", state.recording);
  const [errorR] = useLocation(isFocused, callback);

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

export default withNavigationFocus(TrackCreateScreen);
