import React, { Component } from "react";
import classes from "./Checkboxes.module.css";
import Checkbox from "./Checkbox/Checkbox";
import Jobs from "../../components/Jobs/Jobs";

class Checkboxes extends Component {
  state = {
    checkedItems: {},
    filteredItems: {},
  };

  onChangeHandler = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;
    this.setState((prevState) => {
      const newItems = { ...this.state.checkedItems, [name]: checked };
      const filterByLocation = Object.keys(newItems).filter(
        (el) => newItems[el]
      );
      return { filteredItems: filterByLocation, checkedItems: newItems };
    });
  };
  render() {
    const checkboxes = Object.entries(this.props.occurrences).map(
      ([location, occurrence]) => {
        return (
          <Checkbox
            key={location}
            occurrences={occurrence}
            locations={location}
            checked={(e) => this.onChangeHandler(e)}
            checkedItems={this.state.checkedItems}
          />
        );
      }
    );
    return (
      <div className={classes.Container}>
        <h3>Filter by location</h3>
        <div className={classes.Checkboxes}>{checkboxes}</div>
        <h2>Job results</h2>
        <Jobs jobs={this.props.data} filtered={this.state.filteredItems} />
      </div>
    );
  }
}

export default Checkboxes;
