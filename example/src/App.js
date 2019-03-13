import React, { Component } from "react";

import Polaroid from "react-polaroid";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flip: false
    };
  }
  flip = () => {
    this.setState({
      flip: !this.state.flip
    });
  };

  render() {
    return (
      <div onClick={() => this.flip()}>
        <Polaroid
          frontText="Polaroid kitty - front"
          rotation={0}
          flip={this.state.flip}
        />
      </div>
    );
  }
}
