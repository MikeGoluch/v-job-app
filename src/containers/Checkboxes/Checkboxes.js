import React, { Component } from "react";
import classes from "./Checkboxes.module.css";
import Checkbox from "./Checkbox/Checkbox";
import Jobs from "../../components/Jobs/Jobs";
import MediaQuery from "react-responsive";
import Dropdown from "../../components/UI/Dropdown/Dropdown";

class Checkboxes extends Component {
  state = {
    checkedItems: {},
    filteredItems: {},
  };

  updateStateHandler = (name, checked) => {
    this.setState((prevState) => {
      const newItems = { ...this.state.checkedItems, [name]: checked };
      const filterByLocation = Object.keys(newItems).filter(
        (el) => newItems[el]
      );
      return { filteredItems: filterByLocation, checkedItems: newItems };
    });
  };

  onChangeHandler = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;
    this.updateStateHandler(name, checked);
  };

  // onSelectHandler = (e) => {
  //   let name = "";
  //   let checked = "";
  //   e.map((el) => {
  //     name = el.name;
  //     checked = !el.checked;
  //   });
  //   this.updateStateHandler(name, checked);
  // };

  select = (selectedList, selectedItem) => {
    const name = selectedItem.name;
    const checked = !selectedItem.checked;
    this.updateStateHandler(name, checked);
  };
  remove = (selectedList, removedItem) => {
    const name = removedItem.name;
    const checked = removedItem.checked;
    this.updateStateHandler(name, checked);
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
    const dropdownCheckboxes = (
      <Dropdown
        options={this.props.occurrences}
        select={(selectedList, selectedItem) =>
          this.select(selectedList, selectedItem)
        }
        remove={(selectedList, removedItem) =>
          this.remove(selectedList, removedItem)
        }
      />
    );
    return (
      <div className={classes.Container}>
        <h3>Filter by location</h3>
        <MediaQuery minDeviceWidth={651}>
          <div className={classes.Checkboxes}>{checkboxes}</div>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={650}>
          <div className={classes.Checkboxes}>{dropdownCheckboxes}</div>
        </MediaQuery>
        <h2>Job results</h2>
        <Jobs jobs={this.props.data} filtered={this.state.filteredItems} />
      </div>
    );
  }
}

export default Checkboxes;
