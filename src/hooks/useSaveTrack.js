import { useContext } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import { Context as TrackContext } from "../context/TrackContext";
import { navigate } from "../navigationRef";

export default () => {
  const { saveTrack } = useContext(TrackContext);
  const {
    state: { name, locations },
    reset,
  } = useContext(LocationContext);

  const trackSaved = async () => {
    await saveTrack(name, locations);
    reset();
    navigate("TrackList");
  };

  return [trackSaved];
};
