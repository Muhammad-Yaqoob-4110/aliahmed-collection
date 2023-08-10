import React, { Component } from "react";
import "../../index.css";
class SearchBox extends Component {
  state = {};
  render() {
    const { value, onChange } = this.props;
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
      </div>
    );
  }
}

export default SearchBox;
