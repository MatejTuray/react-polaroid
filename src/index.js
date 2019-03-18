import React, { Component } from "react";
import PropTypes from "prop-types";
import placecat from "./placecat.jpg";
import styles from "./styles.css";

class Polaroid extends Component {
  /**
   *React component - Flippable Polaroid photo
   */
  static propTypes = {
    /**
     * Text on the front of the polaroid picture / card
     */
    frontText: PropTypes.string,

    /**
     *Image uri
     */
    imgSrc: PropTypes.string,

    /**
     * Height
     */
    height: PropTypes.number,

    /**
     * Width
     */
    width: PropTypes.number,

    /**
     * Rotation of the component
     */
    rotation: PropTypes.number,

    /**
     * Control flipping between front and back
     */
    flip: PropTypes.bool,

    /**
     *Text on the back of the polaroid picture / card
     */
    backText: PropTypes.string,

    /**
     *Disable flipping
     */
    disabled: PropTypes.bool,

    /**
     *Flip animation type
     */
    type: PropTypes.oneOf(["side", "default"]),

    /**
     *Optional background color prop
     */
    cardColor: PropTypes.string
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
      backText,
      cardColor
    } = this.props;
    let fliptype =
      this.props.type === "default" && !this.props.disabled
        ? `rotateY(180deg)`
        : `translateX(-100%) rotateY(-180deg)`;
    let transformOrigin =
      !this.props.disabled && this.props.type === "side"
        ? "center right"
        : `center`;
    return (
      <div
        className={styles.Polaroid_container}
        onClick={this.props.onClick}
        style={{
          ...style,
          width,
          height,
          transform: `rotate(${rotation}deg)`,
          maxHeight: height,
          maxWidth: width
        }}
      >
        <div
          className={styles.Polaroid_card}
          style={{
            ...style,
            transform: this.state.flip ? fliptype : `rotateY(0deg)`,
            transformOrigin: transformOrigin,
            backgroundColor: cardColor
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
            <p className={styles.Polaroid_text}>{frontText}</p>
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
  frontText: "Polaroid kitty - front",
  rotation: 0,
  backText: "Polaroid kitty - back",
  flip: false,
  disabled: false,
  type: "default",
  cardColor: "white"
};

export default Polaroid;
