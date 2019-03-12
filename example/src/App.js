import React, { Component } from "react";

import ExampleComponent from "react-polaroid";

export default class App extends Component {
  render() {
    return (
      <div>
        <ExampleComponent
          text="Polaroid cat"
          imgSrc="https://placekitten.com/200/286"
        />
      </div>
    );
  }
}
