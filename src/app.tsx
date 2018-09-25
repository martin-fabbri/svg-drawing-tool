import * as React from 'react';
import styled from './styled-components';
import Toolbar from './toolbar';

const Container = styled.div`
    width: 100%;
    height: 100%;
    
    display: grid;
    grid-template-areas:
            'toolbar'
            'stage';
    grid-gap: 2px;
    grid-template-rows: 50px auto;
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
          <ToolbarArea>
              <Toolbar />
          </ToolbarArea>
          <StageArea>
              <div className="bp3-button-group bp3-dark">
                  <a className="bp3-button bp3-icon-chart" role="button"/>
                  <a className="bp3-button bp3-icon-control" role="button"/>
                  <a className="bp3-button bp3-icon-graph" role="button"/>
                  <a className="bp3-button bp3-icon-camera" role="button"/>
                  <a className="bp3-button bp3-icon-map" role="button"/>
              </div>
              <div className="bp3-button-group">
                  <a className="bp3-button bp3-icon-chart" role="button"/>
                  <a className="bp3-button bp3-icon-control" role="button"/>
                  <a className="bp3-button bp3-icon-graph" role="button"/>
                  <a className="bp3-button bp3-icon-camera" role="button"/>
                  <a className="bp3-button bp3-icon-map" role="button"/>
              </div>
          </StageArea>
      </Container>
    );
  }
}

export default App;
