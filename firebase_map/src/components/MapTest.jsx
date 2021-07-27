import React from "react";
import { usePosition } from "use-position";
const MapTest = () => {
  const watch = true;
  const { latitude, longitude, speed, timestamp, accuracy, error } =
    usePosition(watch, { enableHighAccuracy: true });

  return (
    <div>
      <h2>{latitude}</h2>
      <h2>{longitude}</h2>
    </div>
  );
};

export default MapTest;
