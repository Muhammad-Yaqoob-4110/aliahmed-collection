import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { toTitleCase, getCollection } from "../services/collection";
import SearchBox from "./common/searchBox";
import Footer from "./footer";
class Collections extends Component {
  state = {
    searchQuery: "",
  };
  haldleSearchQuery = (searchQuery) => {
    this.setState({ searchQuery });
  };
  render() {
    let { collection } = this.props;
    // collection = collection.sort();
    collection.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    const { searchQuery } = this.state;
    if (searchQuery) {
      collection = getCollection().filter((c) => {
        return c.title.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }
    return (
      <div>
        <div className="collections-container bg-light">
          <SearchBox value={searchQuery} onChange={this.haldleSearchQuery} />
          <ul className="list-container my-3">
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
        <Footer />
      </div>
    );
  }
}

export default Collections;
