import React, { Component } from "react";
import PropTypes from "prop-types";
import placecat from "./placecat.jpg";
import styles from "./styles.css";

class Polaroid extends Component {
  static propTypes = {
    frontText: PropTypes.string,
    imgSrc: PropTypes.string,
    style: PropTypes.any,
    height: PropTypes.number,
    width: PropTypes.number,
    rotation: PropTypes.number
  };

  render() {
    const { frontText, imgSrc, style, width, height, rotation } = this.props;
    return (
      <div
        className={styles.Polaroid_container}
        style={{ ...style, width, height, transform: `rotate(${rotation}deg)` }}
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
  imgSrc: placecat,
  frontText: "Polaroid Kitteh",
  rotation: 0
};

export default Polaroid;
