import * as React from "react";
import {IGateShape} from "../../interfaces";
import {getGateShape} from './gate-shapes';

interface IGateProps {
    gate: IGateShape | undefined,
}

class LiveGate extends React.Component<IGateProps> {
    public render() {
        console.log('Rendering: LiveGate');
        const {gate} = this.props;
        if (!gate) {
            return null;
        }
        return getGateShape(gate);
    }
}

export default LiveGate;