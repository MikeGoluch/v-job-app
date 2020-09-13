import React from "react";
import classes from "./Location.module.css";

const location = (props) => {
  let addedClass = classes.Occurrence;
  if (props.occurrences === 0) {
    addedClass = classes.None;
  }
  return (
    <div className={classes.Location}>
      <span className={addedClass}>{props.occurrences}</span>
    </div>
  );
};

export default location;
