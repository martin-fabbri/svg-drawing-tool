import * as React from 'react';
import styled from './styled-components';
import Toolbar from './toolbar';

const Container = styled.div`
    width: 100%;
    height: 100%;
    
    display: grid;
    grid-template-areas:
            'stage toolbar';
    grid-gap: 0;
    grid-template-columns: 75% auto;
    justify-items: stretch;
    
    // full height
    height: 100%;
`;

const StageArea = styled.div`
    grid-area: stage;
    width: 100%;
    height: 100%;
`;

const ToolbarArea = styled.div`
    grid-area: toolbar;
    width: 100%;
    height: 100%;
`;

class App extends React.Component {
  public render() {
    return (
      <Container>
          <StageArea>a</StageArea>
          <ToolbarArea>
            <Toolbar />
          </ToolbarArea>
      </Container>
    );
  }
}

export default App;
