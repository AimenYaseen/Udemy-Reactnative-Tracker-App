import React, { useContext } from "react";
import { Text, Input, Button } from "react-native-elements";
import { Context as LocationContext } from "../context/LocationContext";
import Spacer from "./Spacer";

const TrackForm = () => {
  return (
    <>
      <Input />
      <Button title="Start Recording" />
    </>
  );
};

export default TrackForm;
