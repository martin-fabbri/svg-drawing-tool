import * as React from 'react';
import {DraggableData} from "react-draggable";
import {GraphPanelTools} from '../constants';
import {IGraphPanelContext} from '../interfaces';

const GraphPanelContext = React.createContext<IGraphPanelContext>({
    activeTool: GraphPanelTools.Selection,
    gates: [],
    isDraggingTool: false,
    isGateCreationDialogOpen: false,
    isGatingLive: false,
    onStageDrag: (e: MouseEvent, data: DraggableData) => {
        throw new Error('onStageDrag() not implemented');
    },
    onStageDragStart: (e: MouseEvent, data: DraggableData) => {
        throw new Error('onStageDragStart() not implemented');
    },
    onStageDragStop: (e: MouseEvent, data: DraggableData) => {
        throw new Error('onStageDragStop() not implemented');
    },
    onToolSelected: (selectedTool: GraphPanelTools) => {
        throw new Error('onToolSelected() not implemented');
    },
    selectedGates: [],
    toolDragDeltaX: 0,
    toolDragDeltaY: 0,
    toolDragStartX: 0,
    toolDragStartY: 0,
});

export const {Consumer, Provider} = GraphPanelContext;

export default GraphPanelContext;