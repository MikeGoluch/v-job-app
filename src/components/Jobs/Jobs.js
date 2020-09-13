import React from "react";
import Job from "./Job/Job";

const jobs = (props) => {
  const displayJobResults = (results, resultsLimit = 7) => {
    const start = 0;
    const end = resultsLimit;
    const limitedResults = results.slice(start, end);
    return limitedResults;
  };
  const filterResults = (filtered, results) => {
    const newResults = results.filter((result) => {
      return filtered.includes(result.location);
    });
    return displayJobResults(newResults, undefined);
  };
  return (
    <div>
      {props.filtered.length > 0
        ? filterResults(props.filtered, props.jobs).map((el) => (
            <Job key={el.id} job={el.job} />
          ))
        : displayJobResults(props.jobs, undefined).map((el) => (
            <Job key={el.id} job={el.job} />
          ))}
    </div>
  );
};

export default jobs;
