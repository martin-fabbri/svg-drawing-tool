import * as React from 'react';
import styled from 'styled-components';
import {GateType, IGateShape} from './index';

const GateRect = styled.rect<{ stroke: string, strokeWidth: number }>`
    stroke-linecap: butt;
    stroke-linejoin: miter;
    stroke: ${props => props.stroke};
    stroke-width: 1.5;
    pointer-events: none;
    fill: transparent;
`;

const Label = styled.text`
    font-size: 10px;
`;

interface IGateProps {
    gate: IGateShape,
}

const Gate = (props: IGateProps) => {
    const {gate} = props;
    const {label} = gate;
    const {x, y , width, height, type, stroke = '#30404D', strokeWidth = 1.5} = gate;
    let gateShape: React.ReactNode;
    switch (type) {
        case GateType.Rectangle:
            gateShape = <GateRect x={x} y={y} width={width} height={height} stroke={stroke} strokeWidth={strokeWidth}/>;
            break;
        default:
            gateShape = <GateRect x={x} y={y} width={width} height={height} stroke={stroke} strokeWidth={strokeWidth}/>;
            break;
    }

    return (<>
        {label &&
            <g>
            <Label
                x={x + label.offsetX}
                y={y + label.offsetY}
                textAnchor="middle"
                alignmentBaseline="central"
                filter="url(#label-background-filter)"
            ><tspan x={x + label.offsetX} y={y + label.offsetY} dy="0">{label.text}</tspan>
                <tspan x={x + label.offsetX} y={y + label.offsetY} dy="1.5em">0%</tspan>
            </Label></g>}
        {gateShape}
    </>);
};

interface IStageProps {
    gates: IGateShape[];
    activeGate?: IGateShape;
    isGatingActive: boolean;
}

const Stage = (props: IStageProps) => {
    const {gates, isGatingActive, activeGate} = props;
    const allGates = gates.slice();

    if (isGatingActive && activeGate) {
        allGates.push(activeGate);
    }

    return (
        <svg>
            <defs>
                <filter x="0" y="0" width="1" height="1" id="label-background-filter">
                    <feFlood floodColor="white" floodOpacity={0.5}/>
                    <feComposite in="SourceGraphic"/>
                </filter>
            </defs>
            {allGates.map((gate, index) => (
                <Gate key={index} gate={gate} />
            ))}
        </svg>
    );
};

export default Stage;