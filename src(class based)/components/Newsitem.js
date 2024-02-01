import React, { Component } from 'react';

export class Newsitem extends Component {
  shortenDescription = (text, maxChars) => {
    return text ? (text.length > maxChars ? `${text.substring(0, maxChars)}...` : text) : "Please Click on Read More to view the full article";
  };

  render() {
    let { title, description, imageUrl, newsUrl, date, source } = this.props;
    const maxChars = 200;

    return (
      <div className="card news-card">
        <div className="card-img-container">
          <img src={imageUrl} className="card-img-top" alt="..." />
        </div>
        <span className="bg-danger badge">
          {source}
        </span>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{this.shortenDescription(description, maxChars)}</p>
          <p className="card-text">
            <small className="text-body-secondary">On {new Date(date).toGMTString()}</small>
          </p>
          <a href={newsUrl} className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default Newsitem;
