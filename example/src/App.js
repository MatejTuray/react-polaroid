import React, { Component } from "react";

import Polaroid from "react-polaroid";

export default class App extends Component {
  render() {
    return (
      <div>
        <Polaroid
          frontText="Polaroid kitty - front"
          imgSrc="https://placekitten.com/199/286"
        />
      </div>
    );
  }
}
