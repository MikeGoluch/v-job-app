import React from "react";
import classes from "./Checkbox.module.css";
import Location from "../../../components/Locations/Location/Location";

const checkbox = (props) => {
  return (
    <div>
      <label className={classes.Container}>
        <input
          type="checkbox"
          name={props.locations}
          onChange={props.checked}
        />
        <span>{props.locations}</span>
      </label>
      <Location
        name={props.locations}
        key={props.locations}
        location={props.locations}
        occurrences={props.occurrences}
      />
    </div>
  );
};

export default checkbox;
