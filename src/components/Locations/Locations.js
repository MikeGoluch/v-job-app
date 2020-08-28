import React from "react";
import Location from "./Location/Location";
import classes from "./Locations.module.css";

const locations = (props) => {
  return (
    <div className={classes.Locations}>
      {Object.entries(props.occurrences).map(([location, occurence]) => {
        return <Location location={location} occurrences={occurence} />;
      })}
    </div>
  );
};

export default locations;
