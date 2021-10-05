import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001; // 0.0001 means ten meters
// 30.66133202385322, 73.07555199869797;
const getLocation = (increment) => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      latitude: 30.66133202385322 + increment * tenMetersWithDegrees,
      longitude: 73.07555199869797 + increment * tenMetersWithDegrees,
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
