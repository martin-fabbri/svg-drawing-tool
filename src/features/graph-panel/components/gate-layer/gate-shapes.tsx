import * as React from "react";
import styled, { css, InterpolationValue, keyframes } from "styled-components";
import { GateType, IGateShape } from "../../interfaces";

export enum SelectionType {
  None = "none",
  Selected = "selected",
  Live = "live",
}

const lineAnimationStyles = {
  dashmarkSize: 7,
};

const gateSelectionKeyFrames = keyframes`
  0% {
    stroke-dashoffset: 0
  }
      
  100% {
    stroke-dashoffset: -10
  }
`;

const GateAmination = css`
  animation: ${gateSelectionKeyFrames} 750ms linear infinite;
  stroke-dasharray: ${lineAnimationStyles.dashmarkSize}, ${lineAnimationStyles.dashmarkSize};
`;

interface IStyleAttrs {
  lineAnimation?: InterpolationValue[];
  stroke: string;
  strokeWidth: number;
}

const style: Record<string, IStyleAttrs> = {
  default: {
    stroke: "#30404D",
    strokeWidth: 1.5,
  },
  live: {
    lineAnimation: GateAmination,
    stroke: "#fff",
    strokeWidth: 2.5,
  },
  selected: {
    stroke: "#30404D",
    strokeWidth: 2.5,
  },
};

const GateRect = styled.rect<{ style: IStyleAttrs }>`
  fill: transparent;

  stroke: ${props => props.style.stroke};
  stroke-linecap: butt;
  stroke-linejoin: miter;
  stroke-width: ${props => };

  pointer-events: none;

  ${props => (props.selected ? GateAmination : "")};
`;

const absolutizeCoordinates = (x1: number, y1: number, x2: number, y2: number) => ({
  height: Math.abs(y2),
  width: Math.abs(x2),
  x: x1 + Math.min(x2, 0),
  y: y1 + Math.min(y2, 0),
});

export const getGateShape = (gate: IGateShape, selectionType = SelectionType.None) => {
  const { type, x, y, dx, dy, uuid } = gate;
  // const stroke = selected ? seletedStroke : gate.stroke ? gate.stroke : defaultStroke;

  let stroke: string;
  switch (selectionType) {
    case SelectionType.Selected:
      stroke = seletedStroke;
      break;
    case SelectionType.Live:
      stroke = "white";
      break;
    default:
      stroke = gate.stroke ? gate.stroke : defaultStroke;
  }

  const strokeWidth = gate.strokeWidth ? gate.strokeWidth : defaultStrokeWidth;
  switch (type) {
    case GateType.Rectangle:
      if (selectionType === SelectionType.Selected) {
        return (
          <GateSelection
            key={uuid}
            {...absolutizeCoordinates(x, y, dx, dy)}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        );
      } else {
        return (
          <GateRect
            key={uuid}
            {...absolutizeCoordinates(x, y, dx, dy)}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        );
      }

    default:
      return (
        <GateRect
          key={uuid}
          {...absolutizeCoordinates(x, y, dx, dy)}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
      );
  }
};
