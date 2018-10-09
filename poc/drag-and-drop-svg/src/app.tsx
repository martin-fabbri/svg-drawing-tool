import * as React from 'react';
import styled from 'styled-components';
import Node from "./node";

const Svg = styled.svg`
    border: 1px solid #ddd;
    width: 100%;
    height: 100vh;
`;

class App extends React.Component {
  public render() {
    return (
      <Svg>
          <Node x={50} y={350}/>
      </Svg>
    );
  }
}

export default App;
