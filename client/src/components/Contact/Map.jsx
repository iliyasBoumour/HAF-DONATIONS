import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const Map = withScriptjs(
  withGoogleMap((props) => {
    return (
      <GoogleMap
        defaultZoom={17}
        defaultCenter={{ lat: 31.60167, lng: -7.99117 }}
      >
        {props.isMarkerShown && (
          <Marker position={{ lat: -31.60167, lng: 7.99117 }} />
        )}
      </GoogleMap>
    );
  })
);

export default Map;
