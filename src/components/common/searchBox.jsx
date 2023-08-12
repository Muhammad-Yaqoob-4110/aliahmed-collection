import React, { Component } from "react";
import "../../index.css";
class SearchBox extends Component {
  state = {};
  render() {
    const { value, onChange, length } = this.props;
    return (
      <div className="form-group left-right-margin">
        <h3>FreeCoursesCamp</h3>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
          className="form-control"
          placeholder="Search..."
        />
        <p>
          {length === 1
            ? `There is ${length} cource in the database`
            : `There are ${length} cources in the database`}
        </p>
      </div>
    );
  }
}

export default SearchBox;
