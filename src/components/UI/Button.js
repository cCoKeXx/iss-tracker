import React from "react";
import "./Button.module.css";

const Button = (props) => {
  return (
    <button onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
