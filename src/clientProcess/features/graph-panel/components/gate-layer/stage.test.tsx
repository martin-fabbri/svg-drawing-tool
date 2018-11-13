import { shallow } from "enzyme";
import * as React from "react";
import { GateType, IGateShape } from "../../interfaces";
import Stage from "./stage";

const gates: IGateShape[] = [
  {
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
  },
  {
    dx: 12,
    dy: 24,
    height: 35,
    label: {
      annotation: "This is a test annotation.",
      offsetX: 10,
      offsetY: 10,
      text: "Test Gate 1",
    },
    name: "Test Gate 2",
    type: GateType.Rectangle,
    uuid: "123456",
    width: 200,
    x: 12,
    y: 27,
  },
];

describe("stage gates", () => {
  it("renders active gates", () => {
    const stage = shallow(<Stage gates={gates} />);
    expect(stage.find("Gate").length).toEqual(2);
  });

  it("renders empty gates list", () => {
    const stage = shallow(<Stage gates={[]} />);
    expect(stage.find("Gate").length).toEqual(0);
  });
});
