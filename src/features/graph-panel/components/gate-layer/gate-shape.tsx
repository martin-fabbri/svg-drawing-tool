import * as React from "react";
import styled, { css, keyframes } from "styled-components";
import { GateType, IGateShape } from "../../interfaces";

export enum SelectionType {
  Default = "default",
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

export interface IStyleAttrs {
  lineAnimation: boolean;
  stroke: string;
  strokeWidth: number;
}

const style: Record<SelectionType, IStyleAttrs> = {
  default: {
    lineAnimation: false,
    stroke: "#30404D",
    strokeWidth: 1.5,
  },
  live: {
    lineAnimation: false,
    stroke: "#fff",
    strokeWidth: 2.5,
  },
  selected: {
    lineAnimation: true,
    stroke: "#30404D",
    strokeWidth: 2.5,
  },
};

const GateRect = styled.rect<{ style: IStyleAttrs }>`
  fill: transparent;

  stroke: ${props => props.style.stroke};
  stroke-linecap: butt;
  stroke-linejoin: miter;
  stroke-width: ${props => props.style.strokeWidth};

  pointer-events: none;

  ${props => props.style.lineAnimation && css`
    animation: ${gateSelectionKeyFrames} 750ms linear infinite;
    stroke-dasharray: ${lineAnimationStyles.dashmarkSize}, ${lineAnimationStyles.dashmarkSize};
  `}
`;

const absolutizeCoordinates = (x1: number, y1: number, x2: number, y2: number) => ({
  height: Math.abs(y2),
  width: Math.abs(x2),
  x: x1 + Math.min(x2, 0),
  y: y1 + Math.min(y2, 0),
});

export const getGateShape = (gate: IGateShape, selectionType = SelectionType.Default) => {
  const { type, x, y, dx, dy, uuid } = gate;
  const styleAttrs: IStyleAttrs = style[selectionType];

  switch (type) {
    case GateType.Rectangle:
      return (
        <GateRect
          key={uuid}
          {...absolutizeCoordinates(x, y, dx, dy)}
          style={styleAttrs}
        />
      );
    default:
      return (
        <GateRect
          key={uuid}
          {...absolutizeCoordinates(x, y, dx, dy)}
          style={styleAttrs}
        />
      );
  }
};
