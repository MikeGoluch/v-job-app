import React from "react";
// import Checkbox from "../../UI/Checkbox/Checkbox";
import classes from "./Location.module.css";

const location = (props) => {
  return (
    <div className={classes.Location}>
      <span>{props.occurrences}</span>
    </div>
  );
};

export default location;
