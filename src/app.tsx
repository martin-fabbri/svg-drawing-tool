import * as React from 'react';
import styled from './styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    
    display: grid;
    grid-template-areas:
            'header header'
            'stage toolbar'
            'footer footer';
    grid-gap: 0;
    grid-template-columns: 25px auto;
    grid-template-rows: auto 25px;
    justify-items: stretch;
    
    // full height
    height: 100%;
`;


class App extends React.Component {
  public render() {
    return (
      <Container>
        Test
      </Container>
    );
  }
}

export default App;
