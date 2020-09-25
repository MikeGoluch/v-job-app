import React from "react";
import { Multiselect } from "multiselect-react-dropdown";

const dropdown = (props) => {
  const options = [];
  for (const [name, id] of Object.entries(props.options)) {
    options.push({ name: name, id: id, checked: false });
  }
  return (
    <div>
      <Multiselect
        options={options}
        displayValue="name"
        showCheckbox={true}
        onSelect={props.select}
        onRemove={props.remove}
        closeOnSelect={false}
        avoidHighlightFirstOption={true}
        closeIcon="cancel"
        placeholder="Select city"
        style={{
          multiselectContainer: {
            width: "100%",
          },
          chips: {
            background: "#517cfd",
          },
        }}
      />
    </div>
  );
};

export default dropdown;
