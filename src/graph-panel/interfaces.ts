import {DraggableData} from "react-draggable";
import { GraphPanelTools } from "./constants";

interface IGraphItem {
    delete: boolean;
}

export interface IReloadModePayload {
    graphItems: IGraphItem[];
    mainGraphIndex: number;
}

export enum GateType {
    Ellipse = 'Ellipse',
    Rectangle = 'Rectangle',
    Quad = 'Quad',
    Spider = 'Spider',
    Polygon = 'Polygon',
}

export interface IGateShape {
    uuid: string;
    annotation?: string;
    // originX: number;
    // originY: number;
    x: number;
    y: number;
    dx: number;
    dy: number;
    width?: number;
    height?: number;
    name?: string;
    type: GateType;
    stroke?: string;
    fill?: string;
    strokeWidth?: number;
    label?: IGateLabel;
}

export interface IGateLabel {
    offsetX: number;
    offsetY: number;
    text: string;
    annotation: string;
}

export interface IGraphPanelState {
    activeTool: GraphPanelTools;
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

export interface IGraphPanelContext extends IGraphPanelState {
    onToolSelected: (selectedTool: GraphPanelTools) => void;
    onStageDragStart: (e: MouseEvent, data: DraggableData) => void;
    onStageDrag: (e: MouseEvent, data: DraggableData) => void;
    onStageDragStop: (e: MouseEvent, data: DraggableData) => void;
}

