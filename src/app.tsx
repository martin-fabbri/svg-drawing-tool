import * as React from 'react';
import Toolbar from './graph-panel/components/toolbar';
import {GraphPanelTools} from "./graph-panel/constants";
import styled from './styled-components';

// import {connect} from 'react-redux';
// import {actions} from './graph-panel/duck/actions'
// import {GraphPanelState} from "./graph-panel/duck/reducers";
// import {IAppState} from "./store";

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
    // graphPanel: GraphPanelState;
    // setActiveTool: typeof actions.setActiveTool,
    debug?: boolean;
}

interface IState {
    activeTool: GraphPanelTools;
    isGatingActive: boolean;
    isGatingMode: boolean;
}

class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            activeTool: GraphPanelTools.Selection,
            isGatingActive: false,
            isGatingMode: false,
        };
    }

    public render() {
        // tslint:disable-next-line
        console.log('Rendering: GraphPanel');

        // const { activeTool } = this.props.graphPanel;
        const { activeTool } = this.state;

        return (
            <Container>
                <ToolbarArea>
                    <Toolbar activeTool={activeTool} onToolSelected={this.handleToolSelection}/>
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

        // const {setActiveTool} = this.props;
        // setActiveTool(selectedTool);

        switch (selectedTool) {
            case GraphPanelTools.Rectangle:
            case GraphPanelTools.Ellipse:
            case GraphPanelTools.Polygon:
            case GraphPanelTools.Spider:
            case GraphPanelTools.Curly:
            case GraphPanelTools.Auto:
            case GraphPanelTools.Pencil:
            case GraphPanelTools.Quad:
                this.setState({
                    ...this.state,
                    activeTool: selectedTool,
                    isGatingActive: true,
                    isGatingMode: true,
                });
                break;
            default:
                this.setState({
                    ...this.state,
                    activeTool: GraphPanelTools.Selection,
                });
                break;
        }
    }
}

// const mapStateToProps = (state: IAppState) => {
//     return { graphPanel: state.graphPanel };
// };
//
// const mapDispatchToProps = {
//     setActiveTool: actions.setActiveTool,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;