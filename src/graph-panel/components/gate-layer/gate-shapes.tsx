import * as React from 'react';
import styled, {keyframes} from 'styled-components';
import {GateType, IGateShape} from "../../interfaces";

const dashmarkSize = 7;
const selectedColor = '#007eff';

const gateSelectionKeyFrames = keyframes`
  0% {
    stroke-dashoffset: 0
  }
      
  100% {
    stroke-dashoffset: -10
  }
`;

const GateSelection = styled.rect`
    animation: ${gateSelectionKeyFrames} 750ms linear infinite;
    stroke: '${selectedColor}';
    stroke-dasharray: ${dashmarkSize}, ${dashmarkSize};
    stroke-width: 2.5;
    stroke: ${props => props.stroke};
    fill: transparent;
`;

export const GateRect = styled.rect<{ stroke: string, strokeWidth: number }>`
    stroke-linecap: butt;
    stroke-linejoin: miter;
    stroke: ${props => props.stroke};
    stroke-width: 1.5;
    pointer-events: none;
    fill: transparent;
`;

const seletedStroke = '#007eff';
const defaultStroke = '#30404D';
const defaultStrokeWidth = 1.5;

const absolutizeCoordinates = (x1: number, y1: number, x2: number, y2: number) => ({
    height: Math.abs(y2),
    width: Math.abs(x2),
    x: x1 + Math.min(x2, 0),
    y: y1 + Math.min(y2, 0),
});

export const getGateShape = (gate: IGateShape, selected=false): React.ReactNode => {
    const {type, x, y, dx, dy, uuid} = gate;
    const stroke = selected ? seletedStroke : gate.stroke ? gate.stroke : defaultStroke;
    const strokeWidth = gate.strokeWidth ? gate.strokeWidth : defaultStrokeWidth;
    switch (type) {
        case GateType.Rectangle:
            console.log(absolutizeCoordinates(x, y, dx, dy));
            if (selected) {
                return <GateSelection key={uuid} {...absolutizeCoordinates(x, y, dx, dy)} stroke={stroke} strokeWidth={strokeWidth}/>;
            } else {
                return <GateRect key={uuid} {...absolutizeCoordinates(x, y, dx, dy)} stroke={stroke} strokeWidth={strokeWidth}/>;
            }

        default:
            return <GateRect key={uuid} {...absolutizeCoordinates(x, y, dx, dy)} stroke={stroke} strokeWidth={strokeWidth}/>;
    }
};