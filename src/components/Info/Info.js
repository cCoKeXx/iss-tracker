import React from "react";
import "./Info.module.css";
import Button from "../UI/Button";
const Info = (props) => {
  const { info, fetchData } = props;
  return (
    <div>
      <ul>
        <li>{`Latitude: ${info.latitude.toFixed(2)}`}</li>
        <li>{`Longitude: ${info.longitude.toFixed(2)}`}</li>
        <li>{`Altitude: ${info.latitude.toFixed(2)}`}</li>
        <li>{`Velocity: ${info.velocity.toFixed(2)}`}</li>
      </ul>
      <Button
        type="button"
        onClick={() => {
          fetchData();
        }}
      >
        Fetch data manually
      </Button>
    </div>
  );
};

export default Info;
