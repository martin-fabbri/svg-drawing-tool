import * as React from 'react';
import {DraggableData} from "react-draggable";
import {v4 as uuid} from  "uuid";
import GateLayer from "./graph-panel/components/gate-layer";
import Toolbar from './graph-panel/components/toolbar';
import {GraphPanelTools} from "./graph-panel/constants";
import {Provider as GraphPanelProvider} from './graph-panel/duck/context';
import {GateType, IGateShape, IGraphPanelState} from "./graph-panel/interfaces";
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

class App extends React.Component<IProps, IGraphPanelState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            activeTool: GraphPanelTools.Selection,
            gates: [],
            isDraggingTool: false,
            isGateCreationDialogOpen: false,
            isGatingLive: false,
            selectedGates: [],
            toolDragDeltaX: 0,
            toolDragDeltaY: 0,
            toolDragStartX: 0,
            toolDragStartY: 0,
        };
    }

    public render() {
        // tslint:disable-next-line
        console.log('Rendering: GraphPanel');

        const { handleStageDrag, handleStageDragStart, handleOnToolSelected, handleStageDragStop } = this;

        return (
            <GraphPanelProvider value={{
                ...this.state,
                onStageDrag: handleStageDrag,
                onStageDragStart: handleStageDragStart,
                onStageDragStop: handleStageDragStop,
                onToolSelected: handleOnToolSelected,
            }}>
                <Container>
                    <ToolbarArea>
                        <Toolbar />
                    </ToolbarArea>
                    <StageArea>
                        <GateLayer />
                    </StageArea>
                </Container>
            </GraphPanelProvider>
        );
    }

    private handleStageDrag = (e: MouseEvent, {deltaX, deltaY}: DraggableData) => {
        const {toolDragDeltaX, toolDragDeltaY, liveGate} = this.state;

        if (!liveGate) {
            return;
        }
        const dx = toolDragDeltaX + deltaX;
        const dy = toolDragDeltaY + deltaY;

        const deltaLiveGate: IGateShape = {
            ...liveGate,
            dx,
            dy,
        };

        this.setState({
            ...this.state,
            liveGate: deltaLiveGate,
            selectedGates: [deltaLiveGate],
            toolDragDeltaX: dx,
            toolDragDeltaY: dy,
        });
    };

    private handleStageDragStart = (e: MouseEvent, data: DraggableData) => {
        // const t = e.target as SVGElement;

        // console.log(data);
        console.log(data.node.getBoundingClientRect());

        const {x, y, node} = data;
        const boundingRect = node.getBoundingClientRect();

        const liveGate: IGateShape = {
            dx: 0,
            dy: 0,
            name: 'Lymphocytes',
            type: GateType.Rectangle,
            uuid: uuid(),
            x: x - boundingRect.left,
            y: y - boundingRect.top,
        };

        this.setState({
            ...this.state,
            isDraggingTool: true,
            isGatingLive: true,
            liveGate,
            selectedGates: [liveGate],
            toolDragDeltaX: 0,
            toolDragDeltaY: 0,
            toolDragStartX: x - boundingRect.left,
            toolDragStartY: y - boundingRect.top,
        });
    };

    private handleStageDragStop = (e: MouseEvent, data: DraggableData) => {
        // const t = e.target as SVGElement;
        console.log(data);
    };

    private handleOnToolSelected = (selectedTool: GraphPanelTools) => {
        console.log(`${selectedTool} tool was selected`);

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
                    isGatingLive: true,
                });
                break;
            default:
                this.setState({
                    ...this.state,
                    activeTool: GraphPanelTools.Selection,
                    isGatingLive: false,
                });
                break;
        }
    }
}

export default App;