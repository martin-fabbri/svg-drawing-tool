import * as React from "react";
import { IGateShape } from "../../interfaces";
import Gate from "./gate";

interface IStageProps {
  gates: IGateShape[];
}

class Stage extends React.PureComponent<IStageProps> {
  public render() {
    const { gates } = this.props;
    return (
      <g>
        {gates.map((gate, index) => (
          <Gate key={index} gate={gate} />
        ))}
      </g>
    );
  }
}

export default Stage;
