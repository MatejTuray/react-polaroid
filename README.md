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

## Component

# `Polaroid` (component)

## Props

### `backText`

Prop description

type: `string`
defaultValue: `"Polaroid Kitty - back"`

### `flip`

Prop description

type: `bool`
defaultValue: `false`

### `frontText`

type: `string`
defaultValue: `"Polaroid Kitteh"`

### `height`

Prop description

type: `number`
defaultValue: `400`

### `imgSrc`

Prop description

type: `string`
defaultValue: `placecat`

### `rotation`

Prop description

type: `number`
defaultValue: `0`

### `style`

Prop description

type: `any`

### `width`

Prop description

type: `number`
defaultValue: `220`

## License

MIT © [MatejTuray](https://github.com/MatejTuray)
