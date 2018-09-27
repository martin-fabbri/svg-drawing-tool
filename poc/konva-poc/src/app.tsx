import {Switch} from '@blueprintjs/core';
import * as React from 'react';
import {Group, Layer, Stage, Text} from "react-konva";
import ColoredRect from './colored-rect';
import Handler from "./handler";
import styled from './styled-components';

interface IStageEvent {
    evt: {
        layerX: number;
        layerY: number;
    };
};

interface IShape {
    x: number;
    y: number;
    width: number;
    height: number;
}

interface IProps {
    debug?: boolean;
}

interface IState {
    shapes: IShape[],
    isDrawing: boolean,
    isDrawingMode: boolean,
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    color: white;
    padding: 1em;
`;

const SwitchLabel = styled.span`
    font-size: ${props => props.theme.textLarge}em;
`;

const getRandomInt = (max:  number) => {
    return Math.floor(Math.random() * Math.floor(max));
};

class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isDrawing: false,
            isGatingMode: false,
            shapes: [{x: 10, y: 10, height: 100, width: 100}],
        }
    }

    public render() {
        const {isDrawingMode, shapes} = this.state;
        const rectName = `rect${getRandomInt(1000)}`;
        return (
            <Container className="bp3-dark">
                <Switch checked={isDrawingMode}
                        labelElement={<SwitchLabel>Drawing Mode</SwitchLabel>}
                        onChange={this.handleDrawingModeChange}/>
                <Stage width={window.innerWidth}
                       height={window.innerHeight}
                       onContentClick={this.handleClick}
                       onContentMouseMove={this.handleMouseMove}>
                    <Layer>
                        {shapes.map(shape =>
                            <Group
                                key={`${shape.x}.${shape.y}.${shape.width}.${shape.height}`}>
                                <ColoredRect
                                    name={rectName}
                                    x={shape.x}
                                    y={shape.y}
                                    width={shape.width}
                                    height={shape.height}
                                    isDrawingMode={isDrawingMode}
                                />
                                <Handler targetName={rectName}/>
                                <Text x={10} y={10} text='Label'/>
                            </Group>
                        )}
                    </Layer>
                </Stage>
            </Container>
        );
    }

    private handleDrawingModeChange = () => {
        this.setState({
            ...this.state,
            isGatingMode: !this.state.isDrawingMode,
        });
    };

    private handleClick = (e: IStageEvent) => {
        const { isDrawing, isDrawingMode, shapes } = this.state;
        if (!isDrawingMode) {
            return;
        }

        if (isDrawing) {
            this.setState({
               isDrawing: !isDrawing,
            });
            return;
        }

        const newShapesState = shapes.slice();
        newShapesState.push({
            height: 0,
            width: 0,
            x: e.evt.layerX,
            y: e.evt.layerY,
        });

        this.setState({
            ...this.state,
            isDrawing: true,
            shapes: newShapesState
        });
    };

    private handleMouseMove = (e: IStageEvent) => {
        const { isDrawing, isDrawingMode, shapes } = this.state;
        if (!isDrawingMode) {
            return;
        }

        const mouseX = e.evt.layerX;
        const mouseY = e.evt.layerY;

        if (isDrawing) {
            const currShapeIndex = shapes.length - 1;
            const currShape = shapes[currShapeIndex];
            const newWidth = mouseX - currShape.x;
            const newHeight = mouseY - currShape.y;

            const newShapesState = shapes.slice();
            newShapesState.push({
                height: newHeight,
                width: newWidth,
                x: currShape.x,
                y: currShape.y,
            });

            this.setState({
                ...this.state,
                shapes: newShapesState,
            });
        }
    };
}

export default App;
