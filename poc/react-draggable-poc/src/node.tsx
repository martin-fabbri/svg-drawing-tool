import * as React from 'react';
import {RefObject} from "react";
import { DraggableCore, DraggableData } from 'react-draggable';

interface IProps {
    x: number;
    y: number;
    parent: RefObject<SVGElement>;
}

interface IState {
    x: number;
    y: number;
    isDragging: boolean;
}

class Node extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isDragging: false,
            x: props.x,
            y: props.y
        }
    }

    public render() {
        const {x,y} = this.state;
        return (
            <DraggableCore
                onDrag={this.handleDrag}
            >
                <circle
                    r="20"
                    cx={x}
                    cy={y}
                />
            </DraggableCore>
        );
    }

    private handleDrag = (e: MouseEvent, {deltaX, deltaY, x, y}: DraggableData) => {
        if (!this.props.parent.current) {
            return;
        }

        const bounds = this.props.parent.current.getBoundingClientRect();

        let transX: number;

        if (x <= bounds.left) {
            transX = bounds.left;
        } else if (x >= bounds.left + bounds.width) {
            transX = bounds.left + bounds.width;
        } else {
            transX = this.state.x + deltaX < bounds.left ?
                bounds.left :
                this.state.x + deltaX > bounds.left + bounds.width ?
                    bounds.left + bounds.width :
                    this.state.x + deltaX;
        }

        let transY: number;

        if (y <= bounds.top) {
            transY = bounds.top;
        } else if (y >= bounds.top + bounds.height) {
            transY = bounds.top + bounds.height;
        } else {
            transY = this.state.y + deltaY < bounds.top ?
                bounds.top :
                this.state.y + deltaY > bounds.top + bounds.height ?
                    bounds.top + bounds.height :
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