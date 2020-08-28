import React, { Component } from "react";
import data from "./utils/data/jobs-data.json";
import Jobs from "./components/Jobs/Jobs";
import Locations from "./components/Locations/Locations";
import "./App.css";

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
    // const unique = this.extractUniqueValues(newArr);
    const occurrences = this.countOccurrences(newArr);
    return (
      <div key={data.id}>
        <Locations occurrences={occurrences} />
        <Jobs data={this.state.data} />
      </div>
    );
  }
}

export default App;
