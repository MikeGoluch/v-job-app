import React from "react";
import classes from "./Job.module.css";
import Button from "../../UI/Button/Button";

const job = (props) => {
  return (
    <div className={classes.Job}>
      <p>{props.job}</p>
      <Button>Apply</Button>
    </div>
  );
};

export default job;
