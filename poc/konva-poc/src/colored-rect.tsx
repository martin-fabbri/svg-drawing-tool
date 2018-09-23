import * as Konva from "konva";
import * as React from "react";
import { Rect } from "react-konva";

interface IProps {
    x: number;
    y: number;
    width: number;
    height: number;
    isDrawingMode: boolean;
    name: string;
}

interface IState {
    color: string;
}

class ColoredRect extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            color: 'green',
        }
    }

    public render() {
        const { name, x, y , width, height } = this.props;
        const { color } = this.state;
        return (
            <Rect
                name={name}
                x={x}
                y={y}
                width={width}
                height={height}
                fill={color}
                draggable={true}
                onClick={this.handleClick}
                onTransform={this.handleTransform}
            />
        );
    }

    private handleClick = () => {
        const { isDrawingMode } = this.props;
        if (!isDrawingMode) {
            this.setState({
                color: Konva.Util.getRandomColor(),
            });
        }
    };

    private handleTransform = () => {
        console.log('transformed');
    };
}

export default ColoredRect;