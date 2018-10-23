import { shallow } from "enzyme";
import { GateType, IGateShape } from "../../interfaces";
import { getGateShape, IStyleAttrs, SelectionType } from "./gate-shape";

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

    const style = wrapper
      .find("rect")
      .first()
      .props().style as IStyleAttrs;
    expect(style.lineAnimation).toEqual(false);
  });

  it("renders live gate", () => {
    const shape = getGateShape(rectangularGate, SelectionType.Live);

    const wrapper = shallow(shape);
    expect(wrapper.find("rect").length).toEqual(1);

    const style = wrapper
      .find("rect")
      .first()
      .props().style as IStyleAttrs;
    expect(style.lineAnimation).toEqual(false);
    expect(style.stroke).toEqual("#fff");
  });

  it("renders selected gate", () => {
    const shape = getGateShape(rectangularGate, SelectionType.Selected);

    const wrapper = shallow(shape);
    expect(wrapper.find("rect").length).toEqual(1);

    const style = wrapper
      .find("rect")
      .first()
      .props().style as IStyleAttrs;
    expect(style.lineAnimation).toEqual(true);
  });
});
