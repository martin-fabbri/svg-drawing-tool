import {
    Alignment,
    Button,
    ButtonGroup,
    Navbar,
    NavbarGroup,
    Position,
    Tooltip
} from "@blueprintjs/core";
import * as React from 'react';
import styled, {css} from '../../../styled-components';
import {GraphPanelTools} from "../../constants";
import FjIcon from './toolbar-icons';
import ToolbarTooltip from './toolbar-tooltip';

const Container = styled(Navbar)`
    background-color: #293742 !important;
    height: 40px;
`;

const ToolbarGroup = styled(NavbarGroup)`
    height: 40px;
    padding: 6px;
`;

const ToolbarButton = styled(Button)`
    margin-right: 1px !important;
    fill: #bfccd6;
    
    ${props => props.active && css`
        fill: #bfccd6;
        background-color: #137cbd !important;
    `}
`;

interface IProps {
    activeTool: GraphPanelTools;
}

class Toolbar extends React.PureComponent<IProps> {
    public render() {
        const { activeTool } = this.props;
        // tslint:disable-next-line
        console.log('Rendering: Toolbar');
        return (
            <Container className='bp3-dark'>
                <ToolbarGroup align={Alignment.LEFT}>
                    <ButtonGroup className='bp3-dark'>
                        <Tooltip content={<ToolbarTooltip id={GraphPanelTools.Selection}/>} position={Position.BOTTOM_LEFT} >
                            <ToolbarButton icon={FjIcon.pointerIcon}
                                           active={activeTool === GraphPanelTools.Selection}/>
                        </Tooltip>
                    </ButtonGroup>
                    <Navbar.Divider />
                    <ButtonGroup className='bp3-dark'>
                        <Tooltip content={<ToolbarTooltip id={GraphPanelTools.Rectangle}/>} position={Position.BOTTOM_LEFT} >
                            <ToolbarButton icon={FjIcon.squareIcon}
                                           active={activeTool === GraphPanelTools.Rectangle}/>
                        </Tooltip>
                        <Tooltip content={<ToolbarTooltip id={GraphPanelTools.Quad}/>} position={Position.BOTTOM_LEFT} >
                            <ToolbarButton icon={FjIcon.quadIcon}
                                           active={activeTool === GraphPanelTools.Quad}/>
                        </Tooltip>
                        <Tooltip content={<ToolbarTooltip id={GraphPanelTools.Ellipse}/>} position={Position.BOTTOM_LEFT} >
                            <ToolbarButton icon={FjIcon.ellipseIcon}
                                           active={activeTool === GraphPanelTools.Ellipse}/>
                        </Tooltip>
                        <Tooltip content={<ToolbarTooltip id={GraphPanelTools.Polygon}/>} position={Position.BOTTOM_LEFT} >
                            <ToolbarButton icon={FjIcon.polyIcon}
                                           active={activeTool === GraphPanelTools.Polygon}/>
                        </Tooltip>
                        <Tooltip content={<ToolbarTooltip id={GraphPanelTools.Pencil}/>} position={Position.BOTTOM_LEFT} >
                            <ToolbarButton icon="edit"
                                           active={activeTool === GraphPanelTools.Pencil}/>
                        </Tooltip>
                        <Tooltip content={<ToolbarTooltip id={GraphPanelTools.Auto}/>} position={Position.BOTTOM_LEFT} >
                            <ToolbarButton icon={FjIcon.autoGateIcon}
                                           active={activeTool === GraphPanelTools.Auto}/>
                        </Tooltip>
                        <Tooltip content={<ToolbarTooltip id={GraphPanelTools.Curly}/>} position={Position.BOTTOM_LEFT} >
                            <ToolbarButton icon={FjIcon.curlyGateIcon}
                                           active={activeTool === GraphPanelTools.Curly}/>
                        </Tooltip>
                        <Tooltip content={<ToolbarTooltip id={GraphPanelTools.Spider}/>} position={Position.BOTTOM_LEFT} >
                            <ToolbarButton icon={FjIcon.spiderGateIcon}
                                           active={activeTool === GraphPanelTools.Spider}/>
                        </Tooltip>
                    </ButtonGroup>
                </ToolbarGroup>
            </Container>
        )
    }
}

export default Toolbar;