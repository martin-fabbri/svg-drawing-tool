import * as React from 'react';
import { MouseEvent } from 'react';

interface IProps {
    x: number;
    y: number;
}

interface IState {
    x: number;
    y: number;
    isDragging: boolean;
    dragX: number;
    dragY: number;
}

class Node extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            dragX: props.x,
            dragY: props.y,
            isDragging: false,
            x: props.x,
            y: props.y
        }
    }

    public render() {
        const {x,y} = this.state;
        return (
          <circle
            r="20"
            cx={x}
            cy={y}
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
          />
        );
    }

    private handleMouseDown = (e: MouseEvent) => {
        this.setState({
            ...this.state,
            dragX: e.pageX,
            dragY: e.pageY,
            isDragging: true,
        });
        document.addEventListener('mousemove', this.handleMouseMove);
    };

    private handleMouseUp = (e: MouseEvent) => {
        this.setState({
            ...this.state,
            isDragging: false,
        });
        document.removeEventListener('mousemove', this.handleMouseMove);
    };

    private handleMouseMove = (e: any) => {
        const {isDragging} = this.state;
        if (isDragging) {
            const { dragX, dragY, x, y } = this.state;
            const xDiff = dragX - e.pageX;
            const yDiff = dragY - e.pageY;

            this.setState({
                ...this.state,
                dragX: e.pageX,
                dragY: e.pageY,
                x: x - xDiff,
                y: y - yDiff,
            });
        }
    };

}

export default Node;