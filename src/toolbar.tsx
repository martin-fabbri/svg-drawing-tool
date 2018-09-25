import {Alignment, Button, ButtonGroup, Navbar, NavbarGroup, Position, Tooltip} from "@blueprintjs/core";
import * as React from 'react';
import styled, {css} from './styled-components';
import FjIcon from './toolbar-icons';
import ToolbarTooltip, {Tooltips} from './toolbar-tooltip';

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
                        <Tooltip content={<ToolbarTooltip id={Tooltips.select}/>} position={Position.BOTTOM_LEFT} >
                            <ToolbarButton icon={FjIcon.pointerIcon} active={true}/>
                        </Tooltip>
                    </ButtonGroup>
                    <Navbar.Divider />
                    <ButtonGroup className='bp3-dark'>
                        <ToolbarButton icon={FjIcon.squareIcon} />
                        <ToolbarButton icon={FjIcon.quadIcon} />
                        <ToolbarButton icon={FjIcon.ellipseIcon} />
                        <ToolbarButton icon={FjIcon.polyIcon} />
                        <ToolbarButton icon="edit" />
                        <ToolbarButton icon={FjIcon.autoGateIcon} />
                        <ToolbarButton icon={FjIcon.curlyGateIcon} />
                        <ToolbarButton icon={FjIcon.spiderGateIcon} />
                    </ButtonGroup>
                </ToolbarGroup>
            </Container>
        )
    }
}

export default Toolbar;