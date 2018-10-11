import * as React from 'react';
import {DraggableCore, DraggableData} from "react-draggable";
import {v4 as uuid} from 'uuid';
import {GraphPanelTools} from "../../constants";
import {GateType, IGateShape} from "../../interfaces";
import GateCreationDialog from './gate-creation-dialog';
import LiveGate from './live-gate';
import Selected from './selected';
import Selector from './selector';
import Stage from './stage';

interface IState {
    liveGate?: IGateShape;
    isDraggingTool: boolean;
    isGatingLive: boolean;
    gates: IGateShape[];
    selectedGates: IGateShape[];
    isGateCreationDialogOpen: boolean;
    toolDragDeltaX: number;
    toolDragDeltaY: number;
    toolDragStartX: number;
    toolDragStartY: number;
}

interface IProps {
    activeTool: GraphPanelTools;
}


class GateLayer extends React.Component<IProps, IState> {
    private readonly areaPlotRef: React.RefObject<HTMLDivElement> = React.createRef();

    constructor(props: IProps) {
        super(props);

        this.state = {
            gates: [],
            isDraggingTool: false,
            isGateCreationDialogOpen: false,
            isGatingLive: false,
            selectedGates: [],
            toolDragDeltaX: 0,
            toolDragDeltaY: 0,
            toolDragStartX: 0,
            toolDragStartY: 0,
        }
    }

    public render() {
        console.log('Rendering: Gates Layer');
        const {activeTool} = this.props;
        const {gates, selectedGates, liveGate, isGateCreationDialogOpen} = this.state;
        return (
            <div style={{width: '400px', height: '400px', border: '1px solid black'}}
                 ref={this.areaPlotRef}>
                <GateCreationDialog activeGate={liveGate} handleOnCancel={this.handleOnCancel} handleOnOk={this.handleOnOk} isOpen={isGateCreationDialogOpen}/>
                <DraggableCore
                    onStart={this.handleStageDragStart}
                    onDrag={this.handleStageDrag}
                    onStop={this.handleStageDragStop}
                >
                    <svg>
                        <defs>
                            <filter x="0" y="0" width="1" height="1" id="label-background-filter">
                                <feFlood floodColor="white" floodOpacity={0.5}/>
                                <feComposite in="SourceGraphic"/>
                            </filter>
                        </defs>
                        <Stage gates={gates} />
                        {activeTool === GraphPanelTools.Selection ? (
                            <Selector/>
                        ) : null}
                        {activeTool !== GraphPanelTools.Selection ? (
                            <LiveGate gate={liveGate}/>
                        ) : null}
                        <Selected selectedGates={selectedGates}/>
                    </svg>
                </DraggableCore>
            </div>
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
            height: Math.abs(dy),
            width: Math.abs(dx)
        };

        console.log('deltaLiveGate', deltaLiveGate);

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
            height: 0,
            name: 'Lymphocytes',
            type: GateType.Rectangle,
            uuid: uuid(),
            width: 0,
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
        const {liveGate, isGatingLive} = this.state;
        if (!isGatingLive || !liveGate) {
            return;
        }
        this.setState({
            ...this.state,
            isGateCreationDialogOpen: true,
        });
    };

    private handleOnCancel = () => {
        const {gates} = this.state;
        this.setState({
            ...this.state,
            gates,
            isGateCreationDialogOpen: false,
            isGatingLive: false,
        });
    };

    private handleOnOk = (newGate: IGateShape | undefined) => {
        const {liveGate, gates} = this.state;
        if (liveGate) {
            liveGate.label = {
                annotation: '',
                offsetX: liveGate.width / 2,
                offsetY: liveGate.height / 2 - 5,
                text: newGate && newGate.name ? newGate.name : 'Lymphocytes',
            };
            this.setState({
                ...this.state,
                gates: [...gates, liveGate],
                isGateCreationDialogOpen: false,
                isGatingLive: false,
                selectedGates: [liveGate],
            });
        }
    };
}

export default GateLayer;