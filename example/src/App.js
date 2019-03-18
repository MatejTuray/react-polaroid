import React, { Component } from "react";

import Polaroid from "react-polaroid";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flip1: false,
      flip2: false
    };
  }
  flip = () => {
    this.setState({
      flip1: !this.state.flip1
    });
  };
  sideFlip = () => {
    this.setState({
      flip2: !this.state.flip2
    });
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "100vh",
          width: "100vw"
        }}
      >
        <div>
          <h1>Polaroid Kittens!</h1>
          <h3>
            React flippable polaroid component
            <small> (kittens not included)</small>
          </h3>
          <h4>Click on them to see flipping in action</h4>
        </div>
        <div>
          <Polaroid
            frontText="Polaroid kitty - front with default flip"
            rotation={0}
            flip={this.state.flip1}
            onClick={() => this.flip()}
          />
        </div>
        <div>
          <Polaroid
            onClick={() => this.sideFlip()}
            frontText="Polaroid kitty - front with side flip"
            rotation={0}
            flip={this.state.flip2}
            imgSrc={"http://placekitten.com/200/300"}
            type={"side"}
          />
        </div>
      </div>
    );
  }
}
