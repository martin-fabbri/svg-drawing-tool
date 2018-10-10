import * as React from 'react';
import {RefObject} from "react";
import { DraggableCore, DraggableData } from 'react-draggable';

interface IProps {
    x: number;
    y: number;
    width: number;
    height: number;
    parent: RefObject<SVGElement>;
}

interface IState {
    x: number;
    y: number;
    width: number;
    height: number;
    isDragging: boolean;
}

class Node extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            height: props.height,
            isDragging: false,
            width: props.width,
            x: props.x,
            y: props.y
        }
    }

    public render() {
        const {height, width, x, y} = this.state;
        return (
            <DraggableCore
                onDrag={this.handleDrag}
            >
                <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                />
            </DraggableCore>
        );
    }

    private handleDrag = (e: MouseEvent, {deltaX, deltaY, x, y}: DraggableData) => {
        if (!this.props.parent.current) {
            return;
        }

        const bounds = this.props.parent.current.getBoundingClientRect();

        const gateCentroidX = this.state.x + (this.state.width / 2);
        const draggedCentroidX = gateCentroidX + deltaX;

        let transX: number;

        if ((x <= bounds.left) || (x >= bounds.left + bounds.width)) {
            transX = this.state.x;
        } else {
            transX = draggedCentroidX < bounds.left ?
                this.state.x :
                draggedCentroidX > bounds.left + bounds.width ?
                    this.state.x :
                    this.state.x + deltaX;
        }

        const gateCentroidY = this.state.y + (this.state.height / 2);
        const draggedCentroidY = gateCentroidY + deltaY;

        let transY: number;

        if ((y <= bounds.top) || (y >= bounds.top + bounds.height)) {
            transY = this.state.y;
        } else {
            transY = draggedCentroidY < bounds.top ?
                this.state.y :
                draggedCentroidY > bounds.top + bounds.height ?
                    this.state.y :
                    this.state.y + deltaY;
        }

        this.setState({
            ...this.state,
            x: transX,
            y: transY,
        });
    };

}

export default Node;