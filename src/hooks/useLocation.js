import React, { useEffect, useState } from "react";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

export default (shouldTrack, callback) => {
  const [errorR, setErrorR] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  const startTracking = async () => {
    try {
      await requestForegroundPermissionsAsync();
      const sub = await watchPositionAsync(
        // background function
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      );
      setSubscriber(sub);
    } catch (err) {
      setErrorR(err);
    }
  };

  useEffect(() => {
    if (shouldTrack) {
      startTracking();
    } else {
      subscriber.remove();
      //setSubscriber(null);
    }
  }, [shouldTrack]);

  return [errorR];
};
