import * as React from 'react';
import {connect} from 'react-redux';
import Toolbar from './graph-panel/components/toolbar';
import {GraphPanelTools} from "./graph-panel/constants";
import {actions} from './graph-panel/duck/actions'
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
    setActiveTool: typeof actions.setActiveTool,
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
        // tslint:disable-next-line
        console.log('Rendering: GraphPanel');

        const { activeTool } = this.props.graphPanel;

        return (
            <Container>
                <ToolbarArea>
                    <Toolbar activeTool={activeTool} handleToolSelection={this.handleToolSelection}/>
                </ToolbarArea>
                <StageArea>
                    <div>stage</div>
                </StageArea>
            </Container>
        );
    }

    private handleToolSelection = (selectedTool: GraphPanelTools) => {
        // tslint:disable-next-line
        console.log(`${selectedTool} tool was selected`);
        const {setActiveTool} = this.props;
        setActiveTool(selectedTool);
    }
}

const mapStateToProps = (state: IAppState) => {
    return { graphPanel: state.graphPanel };
};

const mapDispatchToProps = {
    setActiveTool: actions.setActiveTool,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);