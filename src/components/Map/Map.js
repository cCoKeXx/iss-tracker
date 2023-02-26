import React from "react";
import MapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import ISS from "../../assets/Logo.png";

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
      mapStyle="mapbox://styles/mapbox/dark-v9"
      mapboxAccessToken="pk.eyJ1Ijoic3RlZmF2LWRldiIsImEiOiJjbGVrY2lucmYwazNrM3pucHV4aDVoc3EzIn0.fTCPTopqQxWaxpjmJHP4TQ"
    >
      <Marker longitude={lng} latitude={lat} anchor="bottom">
        <img src={ISS} alt="iss" style={{ width: "60px" }} />
      </Marker>
    </MapGL>
  );
};

export default Map;
