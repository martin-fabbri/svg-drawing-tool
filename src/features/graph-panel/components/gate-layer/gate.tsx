import * as React from "react";
import styled from "styled-components";
import { IGateShape } from "../../interfaces";
import { getGateShape } from "./gate-shapes";

const Label = styled.text`
  font-size: 12px;
`;

interface IGateProps {
  gate: IGateShape;
}

class Gate extends React.PureComponent<IGateProps> {
  public render() {
    const { gate } = this.props;
    const { label } = gate;
    const { x, y } = gate;
    const gateShape = getGateShape(gate);

    return (
      <g>
        {gateShape}
        {label && (
          <Label
            x={x + label.offsetX}
            y={y + label.offsetY}
            textAnchor="middle"
            alignmentBaseline="central"
            filter="url(#label-background-filter)"
          >
            <tspan x={x + label.offsetX} y={y + label.offsetY} dy="0">
              {label.text}
            </tspan>
            <tspan x={x + label.offsetX} y={y + label.offsetY} dy="1.5em">
              0%
            </tspan>
          </Label>
        )}
      </g>
    );
  }
}

export default Gate;
