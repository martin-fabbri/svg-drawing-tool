import {shallow} from "enzyme";
import * as React from "react";
// import {GateType, IGateShape} from "../../interfaces";
import Index, {GateLayer} from ".";
import {ParameterAxis} from "../../../../reduxStateMgt/types";
import {GraphPanelTools} from "../../constants";

// const singularGate: IGateShape[] = [
//   {
//     dx: 50,
//     dy: 60,
//     height: 50,
//     label: {
//       annotation: "n/a",
//       offsetX: 10,
//       offsetY: 10,
//       text: "Test Gate 1",
//     },
//     name: "Test Gate 1",
//     type: GateType.Rectangle,
//     uuid: "123456",
//     width: 100,
//     x: 100,
//     y: 50,
//   },
// ];

const xParameterDef: ParameterAxis = {};
const yParameterDef: ParameterAxis = {};

describe("<GateLayer /> Rectangular ", () => {
  it("Wrapped with Context", () => {
    const wrapper = shallow(<Index
        activeTool={GraphPanelTools.Selection}
        // gates={singularGate}
        xParameterDef={xParameterDef}
        yParameterDef={yParameterDef}
        style={{}}/>);
    expect(wrapper.find("ContextConsumer").length).toEqual(1);
  });

  it("renders single gate [no selection, no live]", () => {
    const wrapper = shallow(<GateLayer
        activeTool={GraphPanelTools.Selection}
        xParameterDef={xParameterDef}
        yParameterDef={yParameterDef}
        style={{}}/>);
    expect(wrapper.find("Stage").length).toEqual(1);
    expect(wrapper.find("Selector").length).toEqual(1);
    expect(wrapper.find("Selected").length).toEqual(1);
  });
});
