import React, { Component } from "react";
import { getSpecificCollection, toTitleCase } from "../../services/collection";

class Card extends Component {
  state = {};

  render() {
    const { match } = this.props;
    const collection = getSpecificCollection(match.params.id);
    console.log(collection);
    const cards = [];
    for (let index = 0; index < collection.description.length; index++) {
      cards.push(
        <div className="card" key={index}>
          <h5 className="card-header">{toTitleCase(collection.title)}</h5>
          <div className="card-body">
            {collection.decrypctionKey[index] && (
              <h5 className="card-title">{collection.decrypctionKey[index]}</h5>
            )}
            <p className="card-text">
              {toTitleCase(collection.description[index])}
            </p>
            <a
              href={collection.link[index]}
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Fetch Link
            </a>
          </div>
        </div>
      );
    }

    return <div className="cards-container">{cards}</div>;
  }
}

export default Card;
