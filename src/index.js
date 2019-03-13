import React, { Component } from "react";
import PropTypes from "prop-types";
import placecat from "./placecat.jpg";
import styles from "./styles.css";

class Polaroid extends Component {
  /**
   * General component description.
   */
  static propTypes = {
    frontText: PropTypes.string,
    /**
     * Prop description
     */
    imgSrc: PropTypes.string,
    /**
     * Prop description
     */
    style: PropTypes.any,
    /**
     * Prop description
     */
    height: PropTypes.number,
    /**
     * Prop description
     */
    width: PropTypes.number,
    /**
     * Prop description
     */
    rotation: PropTypes.number,
    /**
     * Prop description
     */
    flip: PropTypes.bool,
    /**
     * Prop description
     */
    backText: PropTypes.string
    /**
     * Prop description
     */
  };
  constructor(props) {
    super(props);
    this.state = {
      flip: this.props.flip
    };
  }
  componentWillReceiveProps(newProps) {
    const state = this.state;
    const props = this.props;

    if (!props.disabled) {
      if (
        (newProps.flip === true && state.flip === false) ||
        (newProps.flip === false && state.flip === true)
      ) {
        return this.setState({
          flip: !state.flip
        });
      }
    }

    return false;
  }

  render() {
    const {
      frontText,
      imgSrc,
      style,
      width,
      height,
      rotation,
      backText
    } = this.props;
    return (
      <div
        className={styles.Polaroid_container}
        style={{ ...style, width, height, transform: `rotate(${rotation}deg)` }}
      >
        <div
          className={styles.Polaroid_card}
          style={{
            ...style,
            transform: this.state.flip ? `rotateY(180deg)` : `rotateY(0deg)`
          }}
        >
          <div
            className={styles.Polaroid_container_back}
            style={{
              ...style
            }}
          >
            <p
              className={styles.Polaroid_back_delay}
              style={{ transform: `rotateY(180deg)` }}
            >
              {backText}
            </p>
          </div>
          <div
            className={styles.Polaroid_container_front}
            style={{
              ...style
            }}
          >
            <img src={imgSrc} className={styles.Polaroid_image} />
            <p>{frontText}</p>
          </div>
        </div>
      </div>
    );
  }
}
Polaroid.defaultProps = {
  height: 400,
  width: 220,
  imgSrc: placecat,
  frontText: "Polaroid Kitteh",
  rotation: 0,
  backText: "Polaroid Kitty - back",
  flip: false
};

export default Polaroid;
