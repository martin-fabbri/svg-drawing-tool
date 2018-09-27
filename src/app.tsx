import * as React from 'react';
import styled from './styled-components';
import Toolbar from './toolbar';
import ToolbarTooltip from './toolbar-tooltip';


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

interface IProps {
    debug?: boolean;
}

interface IState {
    debug?: boolean;
}

class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            debug: false,
        };
    }

    public render() {
        return (
            <Container>
                <ToolbarArea>
                    <Toolbar/>
                </ToolbarArea>
                <StageArea>
                    <ToolbarTooltip id='rectangle'/>
                </StageArea>
            </Container>
        );
    }
}

export default App;
