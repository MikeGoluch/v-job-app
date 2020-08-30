import React, { Component } from "react";
import classes from "./Checkboxes.module.css";
import Checkbox from "./Checkbox/Checkbox";
import Jobs from "../../components/Jobs/Jobs";

class Checkboxes extends Component {
  state = {
    checkedItems: {},
  };

  onChangeHandler = (e) => {
    const newItems = { ...this.state.checkedItems };
    const name = e.target.name;
    const checked = e.target.checked;
    newItems[name] = checked;
    this.setState((prevState) => ({
      checkedItems: newItems,
    }));
  };
  render() {
    const checkboxes = Object.entries(this.props.occurrences).map(
      ([location, occurrence]) => {
        return (
          <Checkbox
            key={location}
            occurrences={occurrence}
            locations={location}
            checked={(e) => this.props.onChangeHandler(e)}
            checkedItems={this.state.checkedItems}
          />
        );
      }
    );
    return (
      <div>
        <div className={classes.Checkboxes}>{checkboxes}</div>
        <Jobs jobs={this.props.data} />
      </div>
    );
  }
}

export default Checkboxes;
