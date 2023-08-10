import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { toTitleCase } from "../services/collection";
class Collections extends Component {
  state = {};
  render() {
    const { collection } = this.props;
    return (
      <div className="collections-container bg-light">
        <ul className="list-container">
          {collection.map((c) => {
            return (
              <Link
                key={c.id}
                className="ancer-style"
                to={`/${c.id}/${c.title.replace(/ /g, "-")}`}
              >
                <li className="list-item">
                  <div>
                    <i
                      className="fa fa-laptop font-awesome-icon"
                      aria-hidden="true"
                    ></i>
                    <span> {toTitleCase(c.title)} </span>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Collections;
