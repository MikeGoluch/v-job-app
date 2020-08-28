import React from "react";
import Job from "./Job/Job";

const jobs = (props) => {
  const displayJobResults = (results, resultsLimit = 30) => {
    const start = 0;
    const end = resultsLimit;
    const limitedResults = results.slice(start, end);
    return limitedResults;
  };
  return (
    <div>
      {displayJobResults(props.data, undefined).map((el) => (
        <Job key={el.id} job={el.job} />
      ))}
    </div>
  );
};

export default jobs;
