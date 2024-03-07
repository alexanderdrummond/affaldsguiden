import React, { useState, useEffect, useCallback, useRef } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "160px",
  backgroundColor: "gray-200",
};

const defaultCoordinates = { lat: 57.04722, lng: 9.9201 };

const GoogleMapView = ({ orgId }) => {
  const [coordinates, setCoordinates] = useState(null);
  const mapRef = useRef(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const onLoad = useCallback(
    (map) => {
      mapRef.current = map;
      if (coordinates) {
        map.setCenter(coordinates);
      }
    },
    [coordinates]
  );

  useEffect(() => {
    if (orgId) {
      fetch(`http://localhost:3000/orgs/${orgId}`)
        .then((response) => response.json())
        .then((data) => {
          const lat = Number(data.latitude);
          const lng = Number(data.longtitude);
          const newCoordinates =
            lat === 0 && lng === 0 ? defaultCoordinates : { lat, lng };
          setCoordinates(newCoordinates);
          console.log("coords:", newCoordinates);
        })
        .catch((error) => console.error("error fetching org", error));
    }
  }, [orgId]);

  return isLoaded && coordinates ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={coordinates}
      zoom={10}
      onLoad={onLoad}
      key={`${coordinates.lat}-${coordinates.lng}`}
    >
      <Marker position={coordinates} />
    </GoogleMap>
  ) : (
    <div style={containerStyle}>Loading...</div>
  );
};

export default GoogleMapView;
