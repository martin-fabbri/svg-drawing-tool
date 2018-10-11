import * as React from 'react';
import {IGateShape} from '../../interfaces';
import {getGateShape} from './gate-shapes';

interface IProps {
    selectedGates: IGateShape[];
}

// const configHandles = (gate: IGateShape) => {
//     const {x, y, width, height} = gate;
//     return [
//         {
//             orientation: 'top-left',
//             x,
//             y,
//         },
//         {
//             orientation: 'top-right',
//             x: x + width,
//             y,
//         },
//         {
//             orientation: 'bottom-right',
//             x: x + width,
//             y: y + height,
//         },
//         {
//             orientation: 'bottom-left',
//             x,
//             y: y + height,
//         },
//     ]};

const Selected = ({selectedGates}: IProps) => (
    <g>
        {selectedGates.map((gate) => {
            console.log('Rendering: Selected');
            return (
                getGateShape(gate, true)
            );
        })}
    </g>
);

export default Selected;