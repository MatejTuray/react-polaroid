import Polaroid from "./index.js";
import styles from "./styles.css";
import React from "react";
import renderer from "react-test-renderer";
import snapshot from "./__snapshots__/test.js.snap";
import { mount, shallow, render } from "enzyme";
const defaultProps = {
  height: 400,
  width: 220,
  imgSrc: "placecat.jpg",
  frontText: "Polaroid kitty - front",
  rotation: 0,
  backText: "Polaroid kitty - back",
  flip: false,
  disabled: false,
  type: "default",
  cardColor: "white"
};

describe("Correctly rendering Polaroid component - snapshot", () => {
  it("should render Polaroid correctly", () => {
    const PolaroidTest = renderer
      .create(
        <Polaroid
          frontText="Front text test"
          backText="Back text test"
          disabled={false}
          height={500}
          width={250}
          type={"side"}
          cardColor={"blue"}
        />
      )
      .toJSON();
    expect(PolaroidTest).toMatchSnapshot();
  });
});

describe("Testing props", () => {
  it("default props should be correct", () => {
    expect(JSON.stringify(Polaroid.defaultProps)).toBe(
      JSON.stringify(defaultProps)
    );
  });
  it("changing backText should be correct", () => {
    const PolaroidTest = renderer
      .create(
        <Polaroid
          frontText="Front text test"
          backText="Back text test"
          disabled={false}
          height={500}
          width={250}
          type={"side"}
          cardColor={"blue"}
        />
      )
      .toTree();

    expect(PolaroidTest.props.backText).toBe("Back text test");
  });
  it("changing frontText should be correct", () => {
    const PolaroidTest = renderer
      .create(
        <Polaroid
          frontText="Front text test"
          backText="Back text test"
          disabled={false}
          height={500}
          width={250}
          type={"side"}
          cardColor={"blue"}
        />
      )
      .toTree();

    expect(PolaroidTest.props.frontText).toBe("Front text test");
  });
  it("changing flipping types should be correct", () => {
    const PolaroidTest = renderer
      .create(
        <Polaroid
          frontText="Front text test"
          backText="Back text test"
          disabled={false}
          height={500}
          width={250}
          type={"side"}
          cardColor={"blue"}
        />
      )
      .toTree();

    expect(PolaroidTest.props.type).toBe("side");
  });
  it("changing card color should work", () => {
    const PolaroidTest = renderer
      .create(
        <Polaroid
          frontText="Front text test"
          backText="Back text test"
          disabled={false}
          height={500}
          width={250}
          type={"side"}
          cardColor={"#ff5f89"}
        />
      )
      .toTree();

    expect(PolaroidTest.props.cardColor).toBe("#ff5f89");
  });
  it("changing height should work", () => {
    const PolaroidTest = renderer
      .create(
        <Polaroid
          frontText="Front text test"
          backText="Back text test"
          disabled={false}
          height={500}
          width={250}
          type={"side"}
          cardColor={"#ff5f89"}
        />
      )
      .toTree();

    expect(PolaroidTest.props.height).toBe(500);
  });
  it("changing width should work", () => {
    const PolaroidTest = renderer
      .create(
        <Polaroid
          frontText="Front text test"
          backText="Back text test"
          disabled={false}
          height={500}
          width={250}
          type={"side"}
          cardColor={"#ff5f89"}
        />
      )
      .toTree();

    expect(PolaroidTest.props.width).toBe(250);
  });
  it("flip status should be a boolean", () => {
    const PolaroidTest = renderer
      .create(
        <Polaroid
          frontText="Front text test"
          backText="Back text test"
          disabled={false}
          height={500}
          width={250}
          type={"side"}
          flip={true}
          cardColor={"#ff5f89"}
        />
      )
      .toTree();

    expect(PolaroidTest.props.flip).toBe(true);
  });
  it("disabled status should be a boolean", () => {
    const PolaroidTest = renderer
      .create(
        <Polaroid
          frontText="Front text test"
          backText="Back text test"
          disabled={false}
          height={500}
          width={250}
          type={"side"}
          flip={true}
          cardColor={"#ff5f89"}
        />
      )
      .toTree();

    expect(PolaroidTest.props.disabled).toBe(false);
  });
  it("rotation should be a number", () => {
    const PolaroidTest = renderer
      .create(
        <Polaroid
          frontText="Front text test"
          backText="Back text test"
          disabled={false}
          height={500}
          width={250}
          type={"side"}
          flip={true}
          cardColor={"#ff5f89"}
          rotation={20}
        />
      )
      .toTree();

    expect(PolaroidTest.props.rotation).toBe(20);
  });
});

describe("Testing behaviour", () => {
  it("should trigger click events", () => {
    let flip = false;
    const switchFlip = flip => {
      return !flip;
    };
    const mockCallBack = jest.fn();
    const component = mount(<Polaroid flip={flip} onClick={mockCallBack} />);
    component
      .find("div")
      .at(0)
      .simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
  it("should flip a polaroid card", () => {
    let flip = false;
    const component = mount(<Polaroid flip={flip} onClick={x => !x} />);
    expect(component.prop("flip")).toBe(false);
    flip = component.prop("onClick")(flip);
    component.setProps({ flip: flip });
    component.update();
    expect(component.prop("flip")).toBe(true);
  });
});
