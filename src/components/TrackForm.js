import React, { useContext } from "react";
import { Text, Input, Button } from "react-native-elements";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";
import Spacer from "./Spacer";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  const [trackSaved] = useSaveTrack();

  return (
    <>
      <Spacer />
      <Spacer>
        <Input
          placeholder="Enter Track name"
          value={name}
          onChangeText={changeName}
        />
        {recording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
        <Spacer />
        {!recording && locations.length ? (
          <Button title="Save Recording" onPress={trackSaved} />
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;
