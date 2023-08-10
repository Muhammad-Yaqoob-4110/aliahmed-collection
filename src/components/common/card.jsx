import React, { Component } from "react";
import { getSpecificCollection, toTitleCase } from "../../services/collection";
class Card extends Component {
  state = {};
  render() {
    const { match } = this.props;
    const collection = getSpecificCollection(match.params.id);
    return (
      <div className="cards-container">
        <div className="card">
          <h5 className="card-header">{toTitleCase(collection.title)}</h5>
          <div className="card-body">
            {collection.decryptionKey && (
              <h5 className="card-title">{collection.decryptionKey}</h5>
            )}
            <p className="card-text">{toTitleCase(collection.description)}</p>
            <a
              href={collection.link}
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Fetch Link
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
