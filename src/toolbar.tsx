import {Alignment, Button, ButtonGroup, Navbar, NavbarGroup, Position, Tooltip} from "@blueprintjs/core";
import * as React from 'react';
import styled, {css} from './styled-components';
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

class Toolbar extends React.Component {
    public render() {
        return (
            <Container className='bp3-dark'>
                <ToolbarGroup align={Alignment.LEFT}>
                    <ButtonGroup className='bp3-dark'>
                        <Tooltip content={<ToolbarTooltip id='select'/>} position={Position.BOTTOM_LEFT} >
                            <ToolbarButton icon={FjIcon.pointerIcon} active={true}/>
                        </Tooltip>
                    </ButtonGroup>
                    <Navbar.Divider />
                    <ButtonGroup className='bp3-dark'>
                        <Tooltip content={<ToolbarTooltip id='rectangle'/>} position={Position.BOTTOM_LEFT} >
                            <ToolbarButton icon={FjIcon.squareIcon} />
                        </Tooltip>
                        <Tooltip content={<ToolbarTooltip id='quad'/>} position={Position.BOTTOM_LEFT} >
                            <ToolbarButton icon={FjIcon.quadIcon} />
                        </Tooltip>
                        <Tooltip content={<ToolbarTooltip id='ellipse'/>} position={Position.BOTTOM_LEFT} >
                            <ToolbarButton icon={FjIcon.ellipseIcon} />
                        </Tooltip>
                        <Tooltip content={<ToolbarTooltip id='polygon'/>} position={Position.BOTTOM_LEFT} >
                            <ToolbarButton icon={FjIcon.polyIcon} />
                        </Tooltip>
                        <Tooltip content={<ToolbarTooltip id='pencil'/>} position={Position.BOTTOM_LEFT} >
                            <ToolbarButton icon="edit" />
                        </Tooltip>
                        <Tooltip content={<ToolbarTooltip id='auto'/>} position={Position.BOTTOM_LEFT} >
                            <ToolbarButton icon={FjIcon.autoGateIcon} />
                        </Tooltip>
                        <Tooltip content={<ToolbarTooltip id='curly'/>} position={Position.BOTTOM_LEFT} >
                            <ToolbarButton icon={FjIcon.curlyGateIcon} />
                        </Tooltip>
                        <Tooltip content={<ToolbarTooltip id='curly'/>} position={Position.BOTTOM_LEFT} >
                            <ToolbarButton icon={FjIcon.spiderGateIcon} />
                        </Tooltip>
                    </ButtonGroup>
                </ToolbarGroup>
            </Container>
        )
    }
}

export default Toolbar;