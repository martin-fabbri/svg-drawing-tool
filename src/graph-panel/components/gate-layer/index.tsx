import {Button, Dialog, FormGroup, InputGroup, Intent} from "@blueprintjs/core";
import * as Classes from "@blueprintjs/core/lib/esm/common/classes";
import * as React from 'react';
import { MouseEvent } from 'react';
import styled from 'styled-components';

interface IProps {
    debug?: boolean;
}

interface IGateShape {
    originX: number;
    originY: number;
    x: number;
    y: number;
    width: number;
    height: number;
}

interface IState {
    activeGate?: IGateShape;
    isGatingActive: boolean;
    gates: IGateShape[];
    isGateCreationDialogOpen: boolean;
}

interface IDrawingGateProps {
    gate: IGateShape,
}

const GateRect = styled.rect`
    stroke-linecap: butt;
    stroke-linejoin: miter;
    stroke: #30404D;
    stroke-width: 1.5;
    pointer-events: none;
    fill: transparent;
`;

const SubPopulationFormGroup = styled(FormGroup)`
    font-size: 14px !important;
    > label {
        font-size: 14px !important;
    }
`;

function DrawingGate(props: IDrawingGateProps) {
    const {gate} = props;
    const {x, y , width, height} = gate;
    return <GateRect x={x} y={y} width={width} height={height} />;
}

interface IDrawingProps {
    gates: IGateShape[];
    activeGate?: IGateShape;
    isGatingActive: boolean;
}

function Drawing(props: IDrawingProps) {
    const {gates, isGatingActive, activeGate} = props;
    const allGates = gates.slice();

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
            isGateCreationDialogOpen: false,
            isGatingActive: false,
        };
    }

    public render() {
        const {activeGate, isGatingActive, gates} = this.state;
        return (
            <>
                {this.gateCreationDialog()}
                <div
                    style={{width: '400px', height: '400px', border: '1px solid black'}}
                    ref={this.areaPlotRef}
                    onMouseDown={this.handleMouseDown}
                    onMouseMove={this.handleMouseMove}>
                    <Drawing gates={gates}
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
            activeGate: {x, y, width: 0, height: 0, originX: x, originY: y},
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

    private gateCreationDialog = () => {
        const {isGateCreationDialogOpen} = this.state;

        const handleOnCancel = () => {
            const {gates} = this.state;
            this.setState({
                ...this.state,
                gates,
                isGateCreationDialogOpen: false,
                isGatingActive: false,
            });
        };

        const handleOnOk = () => {
            const {activeGate, gates} = this.state;
            if (!activeGate) {
                return;
            }
            this.setState({
                ...this.state,
                gates: [...gates, activeGate],
                isGateCreationDialogOpen: false,
                isGatingActive: false,
            });
        };

        return (
            <Dialog
                icon='info-sign'
                title='Subpopulation identification'
                onClose={handleOnCancel}
                isOpen={isGateCreationDialogOpen}
            >
                <div className={Classes.DIALOG_BODY}>
                    <SubPopulationFormGroup
                        label="Enter the name of this subpopulation:"
                        labelFor="name"
                    >
                        <InputGroup id="name"
                                    placeholder="Subpopulation name"
                                    value="Lymphocytes"
                                    autoFocus={true}
                        />
                    </SubPopulationFormGroup>
                </div>
                <div className={Classes.DIALOG_FOOTER}>
                    <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                        <Button onClick={handleOnCancel}>Cancel</Button>
                        <Button onClick={handleOnOk} intent={Intent.PRIMARY}>Ok</Button>
                    </div>
                </div>
            </Dialog>
        );
    };

}


export default GateLayer;