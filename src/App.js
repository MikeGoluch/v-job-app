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

  // extractUniqueValues = (array) => {
  //   let filteredArray = [];
  //   filteredArray = array.filter((element, index, arr) => {
  //     return index == arr.indexOf(element);
  //   });
  //   const occurrences = this.countOccurrences(array)
  //   return filteredArray.map(el => {

  //   });
  // };
  render() {
    const newArr = [];
    this.state.data.map((el) => {
      newArr.push(el["location"]);
    });
    const occurrences = this.countOccurrences(newArr);
    return (
      <div>
        <Checkboxes occurrences={occurrences} data={this.state.data} />
      </div>
    );
  }
}

export default App;
