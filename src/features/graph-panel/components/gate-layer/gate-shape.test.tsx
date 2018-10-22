import { shallow } from "enzyme";
import * as React from "react";
import { GateType, IGateShape } from "../../interfaces";
import {getGateShape, IStyleAttrs} from "./gate-shape";

const rectangularGate: IGateShape = {
    dx: 0,
    dy: 0,
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

describe("<GateShape /> Rectangular ", () => {
  it("renders default gate", () => {
    const shape = getGateShape(rectangularGate);

    const wrapper = shallow(shape);
    expect(wrapper.find("rect").length).toEqual(1);

    const style = wrapper.find("rect").first().props().style as IStyleAttrs;
    expect(style.lineAnimation).toEqual(false);
  });

});
