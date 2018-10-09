import * as React from 'react';
import styled from 'styled-components';
import Node from "./node";

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
          <Node x={50} y={350} parent={this.containerRef}/>
          <Node x={100} y={100} parent={this.containerRef}/>
      </Svg>
    );
  }
}

export default App;
