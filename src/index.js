import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string,
    imgSrc: PropTypes.string
  };

  render() {
    const { text, imgSrc } = this.props;

    return (
      <div>
        <img src={imgSrc || "https://placekitten.com/200/287"} />
        <p>Bottom text: {text}</p>
      </div>
    );
  }
}
