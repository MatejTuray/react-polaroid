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
      <div>
        <Polaroid
          frontText="Polaroid kitty - front with default flip"
          rotation={0}
          flip={this.state.flip1}
          onClick={() => this.flip()}
        />
      </div>
    );
  }
}
```

# `Polaroid` (component)

React component - Flippable Polaroid photo

## Props

### `backText`

Text on the back of the polaroid picture / card

type: `string`
defaultValue: `"Polaroid kitty - back"`

### `cardColor`

Optional background color prop

type: `string`
defaultValue: `"white"`

### `disabled`

Disable flipping

type: `bool`
defaultValue: `false`

### `flip`

Control flipping between front and back

type: `bool`
defaultValue: `false`

### `frontText`

Text on the front of the polaroid picture / card

type: `string`
defaultValue: `"Polaroid kitty - front"`

### `height`

Height

type: `number`
defaultValue: `400`

### `imgSrc`

Image uri

type: `string`
defaultValue: `placecat`

### `rotation`

Rotation of the component

type: `number`
defaultValue: `0`

### `type`

Flip animation type

type: `enum("side"|"default")`
defaultValue: `"default"`

### `width`

Width

type: `number`
defaultValue: `220`

## License

MIT © [MatejTuray](https://github.com/MatejTuray)
