import React, { Component } from "react";
import data from "./utils/data/jobs-data.json";
import Checkboxes from "./containers/Checkboxes/Checkboxes";
import classes from "./App.module.css";

class App extends Component {
  state = {
    data,
  };

  countOccurrences = (array) => {
    const countOccurrences = array.reduce((acc, curr) => {
      if (typeof acc[curr] == "undefined") {
        acc[curr] = 1;
      } else {
        acc[curr] += 1;
      }
      return acc;
    }, {});
    return countOccurrences;
  };
  render() {
    const newArr = [];
    this.state.data.map((el) => {
      newArr.push(el["location"]);
    });
    const occurrences = this.countOccurrences(newArr);
    return (
      <div>
        <div className={classes.Container}>
          <div className={classes.BluePart}></div>
          <div className={classes.GreyPart}></div>
          <div className={classes.Background}></div>
          <div className={classes.Jobs}>
            <h1>Jobs</h1>
            <Checkboxes occurrences={occurrences} data={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
