# react-polaroid

> React polaroid component - card

[![NPM](https://img.shields.io/npm/v/react-polaroid.svg)](https://www.npmjs.com/package/react-polaroid) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-polaroid
```

## Usage

```jsx
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
```

##PropTypes

## License

MIT © [MatejTuray](https://github.com/MatejTuray)
