import * as React from "react";
import styled from "styled-components";
import { IGateShape } from "../../interfaces";
import { getGateShape, SelectionType } from "./gate-shapes";

interface IProps {
  selectedGates: IGateShape[];
}

const selectedColor = "#30404D";

const HandleDot = styled.ellipse`
    stroke: '${selectedColor}'
    fill: '${selectedColor}'
`;

const configHandles = (gate: IGateShape) => {
  const { x, y, width, height } = gate;
  return [
    {
      orientation: "top-left",
      x,
      y,
    },
    {
      orientation: "top-right",
      x: x + width,
      y,
    },
    {
      orientation: "bottom-right",
      x: x + width,
      y: y + height,
    },
    {
      orientation: "bottom-left",
      x,
      y: y + height,
    },
  ];
};

const rotatorHitArea = 5;

const Selected = ({ selectedGates }: IProps) => (
  <g>
    {selectedGates.length === 1 &&
      configHandles(selectedGates[0]).map(({ x, y }, j) => (
        <HandleDot
          key={`handle-rotator-${j}`}
          cx={x}
          cy={y}
          rx={rotatorHitArea}
          ry={rotatorHitArea}
          fill={selectedColor}
        />
      ))}
    {selectedGates.map(gate => {
      return getGateShape(gate, SelectionType.Selected);
    })}
  </g>
);

export default Selected;
