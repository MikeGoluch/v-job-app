import React from "react";
import Input from "../../UI/Input/Input";
import classes from "./Location.module.css";

const location = (props) => {
  return (
    <div className={classes.Location}>
      <Input city={props.location} />
      <span>{props.occurrences}</span>
    </div>
  );
};

export default location;
