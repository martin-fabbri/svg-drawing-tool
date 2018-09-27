import * as React from 'react';
import {connect} from 'react-redux';
import Toolbar from './graph-panel/components/toolbar';
import ToolbarTooltip from './graph-panel/components/toolbar/toolbar-tooltip';
import {GraphPanelTools} from "./graph-panel/constants";
import {GraphPanelState} from "./graph-panel/duck/reducers";
import {IAppState} from "./store";
import styled from './styled-components';

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
    graphPanel: GraphPanelState;
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
        const { activeTool } = this.props.graphPanel;

        return (
            <Container>
                <ToolbarArea>
                    <Toolbar activeTool={activeTool}/>
                </ToolbarArea>
                <StageArea>
                    <ToolbarTooltip id={GraphPanelTools.Rectangle}/>
                </StageArea>
            </Container>
        );
    }
}

const mapStateToProps = (state: IAppState) => {
    return { graphPanel: state.graphPanel };
};

export default connect(mapStateToProps)(App);