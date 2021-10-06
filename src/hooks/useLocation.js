import React, { useEffect, useState } from "react";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

export default (shouldTrack, callback) => {
  const [errorR, setErrorR] = useState(null);

  useEffect(() => {
    let subscriber;
    const startTracking = async () => {
      try {
        await requestForegroundPermissionsAsync();
        subscriber = await watchPositionAsync(
          // background function
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callback
        );
      } catch (err) {
        setErrorR(err);
      }
    };

    if (shouldTrack) {
      startTracking();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }
    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [errorR];
};
