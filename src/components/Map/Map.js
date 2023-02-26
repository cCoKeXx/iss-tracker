import React from "react";
import MapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import ISS from "../../assets/Logo.png";

import mapboxgl from "mapbox-gl";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';


const Map = (props) => {
  let lng = props.info.longitude.toFixed(4);
  let lat = props.info.latitude.toFixed(4);
  return (
    <MapGL
      initialViewState={{
        longitude: lng,
        latitude: lat,
        zoom: 0,
      }}
      style={{ width: "100%", height: "13rem", marginTop: "2rem" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      <Marker longitude={lng} latitude={lat} anchor="bottom">
        <img src={ISS} alt="iss" style={{ width: "60px" }} />
      </Marker>
    </MapGL>
  );
};

export default Map;
