import React, { useState } from "react";
import classes from "./Job.module.css";
import Button from "../../UI/Button/Button";

const Job = (props) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      className={classes.Job}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <p>{props.job}</p>
      {isShown && <Button>Apply</Button>}
      {/* <Button>Apply</Button> */}
    </div>
  );
};

export default Job;
