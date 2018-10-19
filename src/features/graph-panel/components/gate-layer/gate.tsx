import * as React from "react";
import styled from "styled-components";
import {IGateShape} from "../../interfaces";
import {getGateShape} from './gate-shapes';

const Label = styled.text`
    font-size: 10px;
`;

interface IGateProps {
    gate: IGateShape,
}

class Gate extends React.Component<IGateProps> {
    public render() {
        const {gate} = this.props;
        const {label} = gate;
        const {x, y} = gate;
        const gateShape = getGateShape(gate);

        return (
            <g>
                {label &&
                <Label
                    x={x + label.offsetX}
                    y={y + label.offsetY}
                    textAnchor="middle"
                    alignmentBaseline="central"
                    filter="url(#label-background-filter)"
                ><tspan x={x + label.offsetX} y={y + label.offsetY} dy="0">{label.text}</tspan>
                    <tspan x={x + label.offsetX} y={y + label.offsetY} dy="1.5em">0%</tspan>
                </Label>}
                {gateShape}
            </g>
        );
    }

//     private handleDrag = (e: MouseEvent, {deltaX, deltaY, x, y}: DraggableData) => {
//         if (!this.props.parent.current) {
//             return;
//         }
//
//         const bounds = this.props.parent.current.getBoundingClientRect();
//         const {gate} = this.props;
//
//         const gateCentroidX = gate.x + (gate.width / 2);
//         const draggedCentroidX = gateCentroidX + deltaX;
//
//         let transX: number;
//
//         if ((x <= bounds.left) || (x >= bounds.left + bounds.width)) {
//             transX = gate.x;
//         } else {
//             transX = draggedCentroidX < bounds.left ?
//                 gate.x :
//                 draggedCentroidX > bounds.left + bounds.width ?
//                     gate.x :
//                     gate.x + deltaX;
//         }
//
//         const gateCentroidY = gate.y + (gate.height / 2);
//         const draggedCentroidY = gateCentroidY + deltaY;
//
//         let transY: number;
//
//         if ((y <= bounds.top) || (y >= bounds.top + bounds.height)) {
//             transY = gate.y;
//         } else {
//             transY = draggedCentroidY < bounds.top ?
//                 gate.y :
//                 draggedCentroidY > bounds.top + bounds.height ?
//                     gate.y :
//                     gate.y + deltaY;
//         }
//
//         console.log('update gate: ', transX, transY);
//         // this.setState({
//         //     ...this.state,
//         //     x: transX,
//         //     y: transY,
//         // });
//     };
}

export default Gate;