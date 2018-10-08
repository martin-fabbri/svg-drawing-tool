import * as React from 'react';
import {MouseEvent} from 'react';
import GateCreationDialog from './gate-creation-dialog';
import Stage from './stage';

interface IProps {
    debug?: boolean;
}

export enum GateType {
    Ellipse = 'Ellipse',
    Rectangle = 'Rectangle',
    Quad = 'Quad',
    Spider = 'Spider',
    Polygon = 'Polygon',
}

export interface IGateShape {
    originX: number;
    originY: number;
    x: number;
    y: number;
    width: number;
    height: number;
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

interface IState {
    activeGate?: IGateShape;
    isGatingActive: boolean;
    gates: IGateShape[];
    isGateCreationDialogOpen: boolean;
}

class GateLayer extends React.Component<IProps, IState> {
    private readonly areaPlotRef: React.RefObject<HTMLDivElement> = React.createRef();

    constructor(props: IProps) {
        super(props);
        this.state = {
            gates: [],
            isGateCreationDialogOpen: false,
            isGatingActive: false,
        };
    }

    public render() {
        const {activeGate, isGatingActive, gates, isGateCreationDialogOpen} = this.state;
        return (
            <>
                <GateCreationDialog activeGate={activeGate} handleOnCancel={this.handleOnCancel} handleOnOk={this.handleOnOk} isOpen={isGateCreationDialogOpen}/>
                <div
                    style={{width: '400px', height: '400px', border: '1px solid black'}}
                    ref={this.areaPlotRef}
                    onMouseDown={this.handleMouseDown}
                    onMouseMove={this.handleMouseMove}>
                    <Stage gates={gates}
                           activeGate={activeGate}
                           isGatingActive={isGatingActive}/>
                </div>
            </>
        );
    }

    public componentDidMount() {
        document.addEventListener('mouseup', this.handleMouseUp);
    }

    public componentWillUnmount() {
        document.addEventListener('mouseup', this.handleMouseUp);
    }

    private getRelativeCoordinates(e: MouseEvent) {
        const gatingArea = this.areaPlotRef.current;
        if (!gatingArea) {
            return;
        }
        const boundingRect = gatingArea.getBoundingClientRect();
        return {
            x: e.clientX - boundingRect.left,
            y: e.clientY - boundingRect.top,
        }
    }

    private handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        if (e.button !== 0) {
            return;
        }

        const point = this.getRelativeCoordinates(e);

        if (!point) {
            return;
        }

        const {x, y} = point;

        this.setState({
            ...this.state,
            activeGate: {
                height: 0,
                name: 'Lymphocytes',
                originX: x,
                originY: y,
                type: GateType.Rectangle,
                width: 0,
                x,
                y
            },
            isGatingActive: true,
        });
    };

    private handleMouseMove = (e: MouseEvent) => {
        const {isGatingActive, activeGate} = this.state;
        if (!isGatingActive || !activeGate) {
            return;
        }

        const point = this.getRelativeCoordinates(e);

        if (!point) {
            return;
        }

        const {x, y} = point;

        const updatedGate: IGateShape = {
            ...activeGate,
            height: (y > activeGate.originY) ? y - activeGate.y : activeGate.originY - y,
            width: (x > activeGate.originX) ? x - activeGate.x : activeGate.originX - x,
            x: (x > activeGate.originX) ? activeGate.originX: x,
            y: (y > activeGate.originY) ? activeGate.originY: y,
        };

        this.setState({
            ...this.state,
            activeGate: updatedGate,
        });
    };

    private handleMouseUp = () => {
        const {activeGate, isGatingActive} = this.state;
        if (!isGatingActive || !activeGate) {
            return;
        }
        this.setState({
            ...this.state,
            isGateCreationDialogOpen: true,
        });
    };

    private handleOnCancel = () => {
        const {gates} = this.state;
        this.setState({
            ...this.state,
            gates,
            isGateCreationDialogOpen: false,
            isGatingActive: false,
        });
    };

    private handleOnOk = (newGate: IGateShape | undefined) => {
        const {activeGate, gates} = this.state;
        if (activeGate) {
            activeGate.label = {
                annotation: '',
                offsetX: activeGate.width / 2,
                offsetY: activeGate.height / 2,
                text: newGate && newGate.name ? newGate.name : 'Lymphocytes',
            };
            this.setState({
                ...this.state,
                gates: [...gates, activeGate],
                isGateCreationDialogOpen: false,
                isGatingActive: false,
            });
        }
    };
}


export default GateLayer;