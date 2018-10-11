import * as React from 'react';
import styled from 'styled-components';
import Gate from "./gate";

const Svg = styled.svg`
    border: 1px solid #ddd;
    width: 500px;
    height: 500px;
`;

class App extends React.Component {
  private containerRef = React.createRef<SVGElement>();

  public render() {
    return (
      <Svg innerRef={this.containerRef}>
          <Gate x={50} y={350} width={300} height={100} parent={this.containerRef}/>
          <Gate x={100} y={100} width={200} height={50} parent={this.containerRef}/>

          {/*<SelectedGates />*/}

      </Svg>
    );
  }
}

export default App;
