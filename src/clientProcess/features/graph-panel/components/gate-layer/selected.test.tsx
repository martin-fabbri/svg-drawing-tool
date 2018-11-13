import { shallow } from "enzyme";
import * as React from "react";
import { GateType, IGateShape } from "../../interfaces";
import Selected from "./selected";

const singularSelectedrGate: IGateShape[] = [
  {
    dx: 50,
    dy: 60,
    height: 50,
    label: {
      annotation: "n/a",
      offsetX: 10,
      offsetY: 10,
      text: "Test Gate 1",
    },
    name: "Test Gate 1",
    type: GateType.Rectangle,
    uuid: "123456",
    width: 100,
    x: 100,
    y: 50,
  },
];

const multipleSelectedrGates: IGateShape[] = [
  {
    dx: 50,
    dy: 60,
    height: 50,
    label: {
      annotation: "n/a",
      offsetX: 10,
      offsetY: 10,
      text: "Test Gate 1",
    },
    name: "Test Gate 1",
    type: GateType.Rectangle,
    uuid: "123456",
    width: 100,
    x: 100,
    y: 50,
  },
  {
    dx: 150,
    dy: 160,
    height: 160,
    label: {
      annotation: "n/a",
      offsetX: 10,
      offsetY: 10,
      text: "Test Gate 2",
    },
    name: "Test Gate 2",
    type: GateType.Rectangle,
    uuid: "456789",
    width: 150,
    x: 100,
    y: 50,
  },
];

describe("<Selected /> Rectangular ", () => {
  it("renders single gate selection", () => {
    const wrapper = shallow(<Selected selectedGates={singularSelectedrGate} />);
    expect(wrapper.find("HandleDot").length).toEqual(4);
    expect(wrapper.find("GateRect").length).toEqual(1);
  });

  it("renders multiple gates selection", () => {
    const wrapper = shallow(<Selected selectedGates={multipleSelectedrGates} />);
    expect(wrapper.find("HandleDot").length).toEqual(0);
    expect(wrapper.find("GateRect").length).toEqual(2);
  });
});
