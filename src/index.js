import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

class Polaroid extends Component {
  static propTypes = {
    frontText: PropTypes.string,
    imgSrc: PropTypes.string,
    style: PropTypes.any,
    height: PropTypes.number,
    width: PropTypes.number
  };

  render() {
    const { frontText, imgSrc, style, width, height } = this.props;

    return (
      <div
        className={styles.Polaroid_container}
        style={{ ...style, width, height }}
      >
        <img src={imgSrc} className={styles.Polaroid_image} />
        <p>{frontText}</p>
      </div>
    );
  }
}
Polaroid.defaultProps = {
  height: 400,
  width: 220,
  imgSrc: "https://placekitten.com/200/287",
  frontText: "Polaroid Kitteh"
};

export default Polaroid;
