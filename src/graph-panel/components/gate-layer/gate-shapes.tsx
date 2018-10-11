import * as React from 'react';
import styled from 'styled-components';
import {GateType, IGateShape} from "../../interfaces";

export const GateRect = styled.rect<{ stroke: string, strokeWidth: number }>`
    stroke-linecap: butt;
    stroke-linejoin: miter;
    stroke: ${props => props.stroke};
    stroke-width: 1.5;
    pointer-events: none;
    fill: transparent;
`;

// .selection
// animation-duration: 750ms
// animation-iteration-count: infinite
// animation-name: merkaba-selection
// animation-timing-function: linear
// stroke: $selector-color
// stroke-dasharray: $dashmark-size, $dashmark-size
// stroke-width: 4px

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
            return <GateRect key={uuid} {...absolutizeCoordinates(x, y, dx, dy)} stroke={stroke} strokeWidth={strokeWidth}/>;
        default:
            return <GateRect key={uuid} {...absolutizeCoordinates(x, y, dx, dy)} stroke={stroke} strokeWidth={strokeWidth}/>;
    }
};