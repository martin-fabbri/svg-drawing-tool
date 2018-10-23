import { shallow } from "enzyme";
import * as React from "react";
import { GateType, IGateShape } from "../../interfaces";
import LiveGate from "./live-gate";

const rectangularGate: IGateShape = {
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
};

describe("<LiveGate /> Rectangular ", () => {
  it("renders live gate", () => {
    const wrapper = shallow(<LiveGate gate={rectangularGate} />);
    expect(wrapper.find("GateRect").length).toEqual(1);
    const props = wrapper
      .find("GateRect")
      .first()
      .props();
    expect(props.x).toEqual(rectangularGate.x);
    expect(props.y).toEqual(rectangularGate.y);
    expect(props.width).toEqual(rectangularGate.dx);
    expect(props.height).toEqual(rectangularGate.dy);
  });
});
