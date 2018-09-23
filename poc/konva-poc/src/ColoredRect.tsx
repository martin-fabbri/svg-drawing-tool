import * as Konva from "konva";
import * as React from "react";
import {Group, Rect} from "react-konva";

interface IProps {
    x: number;
    y: number;
    width: number;
    height: number;
    isDrawingMode: boolean;
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
        const { x, y , width, height } = this.props;
        const { color } = this.state;
        return (
            <Group>
                <Rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    fill={color}
                    onClick={this.handleClick}
                />
            </Group>
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
}

export default ColoredRect;