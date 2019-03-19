# react-polaroid

> React polaroid component - card

[![NPM](https://img.shields.io/npm/v/react-polaroid.svg)](https://www.npmjs.com/package/react-polaroid)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Coverage: lines](./coverage/badge-lines.svg)
![Coverage: functions](./coverage/badge-functions.svg)
![Downloads](https://img.shields.io/npm/dt/react-polaroid.svg)

## Install

```bash
yarn add react-polaroid
```

## Tests

Testing done by Jest, Sinon, Jasmine, react-test-renderer

```bash
yarn test
```

Or

```bash
yarn test --watch
```

Generate coverage report

```bash
yarn test-coverage
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

## Test Coverage

You can find detailed report in ./coverage folder

| File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Lines |
| --------- | ------- | -------- | ------- | ------- | --------------- |
| All files | 100     | 94.44    | 100     | 100     |                 |
| index.js  | 100     | 94.44    | 100     | 100     | 71              |

## Props

|   Name    |  Type  | Default                |               Description                | Required |
| :-------: | :----: | :--------------------- | :--------------------------------------: | :------: |
| frontText | string | Polaroid kitty - front |     Text on the back of the polaroid     |    no    |
| backText  | string | Polaroid kitty - back  |     Text on the back of the polaroid     |    no    |
| cardColor | string | white                  |      Optional background color prop      |    no    |
|   width   | number | 220                    |            Width of component            |    no    |
|  height   | number | 400                    |           Height of component            |    no    |
| disabled  |  bool  | false                  |             Disable flipping             |    no    |
|   flip    |  bool  | false                  | Control flipping between front and back  |    no    |
|   style   | object | {}                     | Style to customize the component wrapper |    no    |
|  imgSrc   | string | placecat.jpg           |                Image uri                 |    no    |
|   type    |  enum  | default                |     Animation type (side or default)     |    no    |
| rotation  | number | 0                      |        Rotation of the component         |    no    |

## License

MIT © [MatejTuray](https://github.com/MatejTuray)
