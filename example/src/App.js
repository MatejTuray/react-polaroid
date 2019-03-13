import React, { Component } from "react";

import Polaroid from "react-polaroid";

export default class App extends Component {
  render() {
    return (
      <div>
        <Polaroid frontText="Polaroid kitty - front" rotation={-10} />
      </div>
    );
  }
}
