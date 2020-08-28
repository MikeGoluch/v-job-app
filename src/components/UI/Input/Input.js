import React from "react";
import classes from "./Input.module.css";

const input = (props) => {
  return (
    <label className={classes.Container}>
      <input type="checkbox" />
      <span>{props.city}</span>
    </label>
  );
};

export default input;
