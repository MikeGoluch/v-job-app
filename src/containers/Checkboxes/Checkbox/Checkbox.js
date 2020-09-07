import React from "react";
import classes from "./Checkbox.module.css";
import Location from "../../../components/Locations/Location/Location";

const checkbox = (props) => {
  let addedClass = [classes.Container];
  if (props.occurrences === 0) {
    addedClass = [classes.Container, classes.None];
  }
  return (
    <div className={classes.Checkbox}>
      <label className={addedClass.join(" ")}>
        <input
          type="checkbox"
          name={props.locations}
          onChange={props.checked}
          className={classes.Input}
        />
        <span className={classes.Checkmark}></span>
        {props.locations}
      </label>
      <Location occurrences={props.occurrences} />
    </div>
  );
};

export default checkbox;
