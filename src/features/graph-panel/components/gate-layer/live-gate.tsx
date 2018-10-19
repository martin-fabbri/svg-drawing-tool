import * as React from "react";
import { IGateShape } from "../../interfaces";
import { getGateShape } from "./gate-shapes";

interface IGateProps {
  gate: IGateShape | undefined;
}

class LiveGate extends React.Component<IGateProps> {
  public render() {
    const { gate } = this.props;
    if (!gate) {
      return null;
    }
    return getGateShape(gate, false, true);
  }
}

export default LiveGate;
