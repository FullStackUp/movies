import React, { Component } from "react";

export default class MovieElement extends Component {
  render() {
    return (
      <div className="w-25 p-2">
        <div className="card">
          <img
            alt="the batman"
            src="https://fr.web.img5.acsta.net/pictures/22/02/16/17/42/3125788.jpg"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">The Batman</h5>
            <p className="card-text">
              Two years of walking the streets as Batman and instilling fear in
              criminals have brought Bruce Wayne to the heart of Gotham City's
              darkness...
            </p>
          </div>
        </div>
      </div>
    );
  }
}
