import * as React from 'react';
// import {MouseEvent} from 'react';
import {DraggableCore} from "react-draggable";
import {GraphPanelTools} from "../../constants";
// import {v4 as uuid} from 'uuid';
import {Consumer as GraphPanelContextConsumer} from '../../duck/context';
// import {IGateShape} from "../../interfaces";
// import GateCreationDialog from './gate-creation-dialog';
import LiveGate from './live-gate';
import Selected from './selected';
import Selector from './selector';
import Stage from './stage';

class GateLayer extends React.Component {
    private readonly areaPlotRef: React.RefObject<HTMLDivElement> = React.createRef();

    // <div
    // style={{width: '400px', height: '400px', border: '1px solid black'}}
    // ref={this.areaPlotRef}
    // onMouseDown={this.handleMouseDown}
    // onMouseMove={this.handleMouseMove}>
    // <Stage gates={gates}
    // liveGate={liveGate}
    // isGatingLive={isGatingLive}/>
    // <Selected selectedGates={selectedGates}/>
    // </div>

    public render() {
        console.log('Rendering: Gates Layer');
        return (
            <GraphPanelContextConsumer>
                {({ activeTool, liveGate, isGatingLive, gates, isGateCreationDialogOpen, selectedGates, onStageDragStart, onStageDrag, onStageDragStop }) => {
                    return (
                        <div style={{width: '400px', height: '400px', border: '1px solid black'}}
                             ref={this.areaPlotRef}>
                            {/*<GateCreationDialog activeGate={liveGate} handleOnCancel={this.handleOnCancel} handleOnOk={this.handleOnOk} isOpen={isGateCreationDialogOpen}/>*/}
                            <DraggableCore
                                onStart={onStageDragStart}
                                onDrag={onStageDrag}
                                onStop={onStageDragStop}
                            >
                                <svg>
                                    <defs>
                                        <filter x="0" y="0" width="1" height="1" id="label-background-filter">
                                            <feFlood floodColor="white" floodOpacity={0.5}/>
                                            <feComposite in="SourceGraphic"/>
                                        </filter>
                                    </defs>
                                    <Stage gates={gates} />
                                    <Selected selectedGates={selectedGates}/>
                                    <Selector/>
                                    {activeTool !== GraphPanelTools.Selection ? (
                                        <LiveGate gate={liveGate}/>
                                    ) : null}
                                </svg>
                            </DraggableCore>
                        </div>
                    )
                }}
            </GraphPanelContextConsumer>
        );
    }

    // public componentDidMount() {
    //     document.addEventListener('mouseup', this.handleMouseUp);
    // }
    //
    // public componentWillUnmount() {
    //     document.addEventListener('mouseup', this.handleMouseUp);
    // }

    // private getRelativeCoordinates(e: MouseEvent) {
    //     const gatingArea = this.areaPlotRef.current;
    //     if (!gatingArea) {
    //         return;
    //     }
    //     const boundingRect = gatingArea.getBoundingClientRect();
    //     return {
    //         x: e.clientX - boundingRect.left,
    //         y: e.clientY - boundingRect.top,
    //     }
    // }

    // private handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    //     if (e.button !== 0) {
    //         return;
    //     }
    //
    //     const point = this.getRelativeCoordinates(e);
    //
    //     if (!point) {
    //         return;
    //     }
    //
    //     const {activeTool, changeActiveTool} = this.props;
    //
    //     const {x, y} = point;
    //
    //     this.setState({
    //         ...this.state,
    //         liveGate: {
    //             height: 0,
    //             name: 'Lymphocytes',
    //             originX: x,
    //             originY: y,
    //             type: GateType.Rectangle,
    //             uuid: uuid(),
    //             width: 0,
    //             x,
    //             y
    //         },
    //         isGatingLive: true,
    //     });
    //
    //     if (activeTool === GraphPanelTools.Selection) {
    //         changeActiveTool(GraphPanelTools.Rectangle);
    //     }
    // };
    //
    // private handleMouseMove = (e: MouseEvent) => {
    //     const {isGatingLive, liveGate} = this.state;
    //     if (!isGatingLive || !liveGate) {
    //         return;
    //     }
    //
    //     const point = this.getRelativeCoordinates(e);
    //
    //     if (!point) {
    //         return;
    //     }
    //
    //     const {x, y} = point;
    //
    //     const updatedGate: IGateShape = {
    //         ...liveGate,
    //         height: (y > liveGate.originY) ? y - liveGate.y : liveGate.originY - y,
    //         width: (x > liveGate.originX) ? x - liveGate.x : liveGate.originX - x,
    //         x: (x > liveGate.originX) ? liveGate.originX: x,
    //         y: (y > liveGate.originY) ? liveGate.originY: y,
    //     };
    //
    //     this.setState({
    //         ...this.state,
    //         liveGate: updatedGate,
    //     });
    // };

    // private handleMouseUp = () => {
    //     const {liveGate, isGatingLive} = this.state;
    //     if (!isGatingLive || !liveGate) {
    //         return;
    //     }
    //     this.setState({
    //         ...this.state,
    //         isGateCreationDialogOpen: true,
    //     });
    // };
    //
    // private handleOnCancel = () => {
    //     const {gates} = this.state;
    //     this.setState({
    //         ...this.state,
    //         gates,
    //         isGateCreationDialogOpen: false,
    //         isGatingLive: false,
    //     });
    // };
    //
    // private handleOnOk = (newGate: IGateShape | undefined) => {
    //     const {liveGate, gates} = this.state;
    //     if (liveGate) {
    //         liveGate.label = {
    //             annotation: '',
    //             offsetX: liveGate.width / 2,
    //             offsetY: liveGate.height / 2 - 5,
    //             text: newGate && newGate.name ? newGate.name : 'Lymphocytes',
    //         };
    //         this.setState({
    //             ...this.state,
    //             gates: [...gates, liveGate],
    //             isGateCreationDialogOpen: false,
    //             isGatingLive: false,
    //             selectedGates: [liveGate],
    //         });
    //     }
    // };
}

export default GateLayer;