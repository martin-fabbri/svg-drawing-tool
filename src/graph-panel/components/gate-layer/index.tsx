import * as React from 'react';
import { MouseEvent } from 'react';

interface IProps {
    debug?: boolean;
}

interface IGateShape {
    x: number;
    y: number;
    width: number;
    height: number;
}

interface IState {
    activeGate?: IGateShape;
    isGatingActive: boolean;
    gates: IGateShape[];
}

interface IDrawingGateProps {
    gate: IGateShape,
}

function DrawingGate(props: IDrawingGateProps) {
    const {gate} = props;
    const {x, y , width, height} = gate;
    return <rect x={x} y={y} width={width} height={height} />;
}

interface IDrawingProps {
    gates: IGateShape[];
    activeGate?: IGateShape;
    isGatingActive: boolean;
}

function Drawing(props: IDrawingProps) {
    const {gates, isGatingActive, activeGate} = props;
    const allGates = gates;

    if (isGatingActive && activeGate) {
        allGates.push(activeGate);
    }

    return (
        <svg>
            {allGates.map((gate, index) => (
                <DrawingGate key={index} gate={gate} />
            ))}
        </svg>
    );
}

class GateLayer extends React.Component<IProps, IState> {
    private readonly areaPlotRef: React.RefObject<HTMLDivElement> = React.createRef();

    constructor(props: IProps) {
        super(props);
        this.state = {
            gates: [],
            isGatingActive: false,
        };
    }

    public render() {
        const {activeGate, isGatingActive, gates} = this.state;
        return (
            <div
                style={{width: '400px', height: '400px', border: '1px solid black'}}
                ref={this.areaPlotRef}
                onMouseDown={this.handleMouseDown}
                onMouseMove={this.handleMouseMove}
            >
                <Drawing gates={gates}
                         activeGate={activeGate}
                         isGatingActive={isGatingActive}/>
            </div>
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
            activeGate: {x, y, width: 0, height: 0},
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
            height: y - activeGate.y,
            width: x - activeGate.x,
            x: activeGate.x,
            y: activeGate.y
        };

        if (x < activeGate.x) {
            updatedGate.x = x;
            updatedGate.width = activeGate.x - x;
        }

        if (y < activeGate.y) {
            updatedGate.y = y;
            updatedGate.height = activeGate.y - y;
        }

        this.setState({
            ...this.state,
            activeGate: updatedGate,
        });
    };

    private handleMouseUp = () => this.setState({
        ...this.state,
        isGatingActive: false,
    });
}


export default GateLayer;