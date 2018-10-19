import * as React from "react";
import { DraggableCore, DraggableData } from "react-draggable";
import { v4 as uuid } from "uuid";
import { GroupState, ParameterAxis, PopulationDef } from "../../../../reduxStateMgt/types";
import { GraphPanelTools } from "../../constants";
import { withGraphPanelContext } from "../../duck/context";
import { GateType, IGateShape } from "../../interfaces";
import ContextualToolbar from "./contextual-toolbar";
import { createPopulation, getNewPopulationName } from "./create-population";
import GateCreationDialog from "./gate-creation-dialog";
import LiveGate from "./live-gate";
import Selected from "./selected";
import Selector from "./selector";
import Stage from "./stage";

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
  style: React.CSSProperties;
  xParameterDef: ParameterAxis;
  yParameterDef: ParameterAxis | undefined;
  activeTool?: GraphPanelTools;
  selectedPopDef?: PopulationDef;
  selectedGroup?: GroupState;
}

class GateLayer extends React.Component<IProps, IState> {
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
    };
  }

  public render() {
    const { activeTool, style } = this.props;
    const { gates, selectedGates, liveGate, isGateCreationDialogOpen, isGatingLive } = this.state;
    return (
      <div style={style}>
        <GateCreationDialog
          activeGate={liveGate}
          handleOnCancel={this.handleOnCancel}
          handleOnOk={this.handleOnOk}
          isOpen={isGateCreationDialogOpen}
        />
        <ContextualToolbar isGatingLive={isGatingLive} selectedGates={selectedGates} />
        <DraggableCore
          onStart={this.handleStageDragStart}
          onDrag={this.handleStageDrag}
          onStop={this.handleStageDragStop}
        >
          <svg style={style}>
            <defs>
              <filter x="0" y="0" width="1" height="1" id="label-background-filter">
                <feFlood floodColor="white" floodOpacity={0.8} />
                <feComposite in="SourceGraphic" />
              </filter>
            </defs>
            <Stage gates={gates} />
            {activeTool === GraphPanelTools.Selection ? <Selector /> : null}
            {activeTool !== GraphPanelTools.Selection ? <LiveGate gate={liveGate} /> : null}
            <Selected selectedGates={selectedGates} />
          </svg>
        </DraggableCore>
      </div>
    );
  }

  private handleStageDrag = (e: MouseEvent, { deltaX, deltaY }: DraggableData) => {
    const { toolDragDeltaX, toolDragDeltaY, liveGate } = this.state;

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
      width: Math.abs(dx),
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
    const { x, y, node } = data;
    const boundingRect = node.getBoundingClientRect();

    const liveGate: IGateShape = {
      dx: 0,
      dy: 0,
      height: 0,
      name: getNewPopulationName(),
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
    const { liveGate, isGatingLive } = this.state;
    if (!isGatingLive || !liveGate) {
      return;
    }
    this.setState({
      ...this.state,
      isGateCreationDialogOpen: true,
    });
  };

  private handleOnCancel = () => {
    const { gates } = this.state;
    this.setState({
      ...this.state,
      gates,
      isGateCreationDialogOpen: false,
      isGatingLive: false,
    });
  };

  private handleOnOk = (newGate: IGateShape | undefined) => {
    const { liveGate } = this.state;
    const { selectedGroup, selectedPopDef, xParameterDef, yParameterDef } = this.props;

    if (!selectedGroup || !selectedPopDef) {
      console.error("Invalid population definition. Unable to complete gate creation.");
      return;
    }

    if (!newGate) {
      console.error("Invalid new gate definition");
      return;
    }

    if (!liveGate) {
      console.error("Invalid live gate.");
      return;
    }

    liveGate.name = newGate.name;
    liveGate.label = {
      annotation: "n/a",
      offsetX: liveGate.width / 2,
      offsetY: liveGate.height / 2 - 5,
      text: newGate.name ? newGate.name : "n/a",
    };
    this.setState({
      ...this.state,
      isGateCreationDialogOpen: false,
      isGatingLive: false,
      selectedGates: [liveGate],
    });

    createPopulation({
      liveGate,
      selectedGroup,
      selectedPopDef,
      xParameterDef,
      yParameterDef,
    });
  };
}

export default withGraphPanelContext(GateLayer);
