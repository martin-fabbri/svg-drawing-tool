import {Alignment, Button, ButtonGroup, Navbar, NavbarGroup} from "@blueprintjs/core";
import * as React from 'react';
import styled, {css} from './styled-components';

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
    ${props => props.active && css`
        background-color: #137cbd !important;
    `}
`;


const iconWrapper = (path: any, viewboxDefault = 16) => {
    return (
        <svg
            className="bp3-icon"
            width="16"
            height="16"
            viewBox="0 0 12 12"
        >
            {path}
        </svg>
    );
};

const pointerIcon = iconWrapper(
    <g>
        <path d="M0,0,1.26,9.59a.17.17,0,0,0,.31.08L3.78,6.55l3.81-.36a.17.17,0,0,0,.08-.3Z"/><path d="M7.39,11.13,5.94,12a.18.18,0,0,1-.23-.07L1,3.19l1.31-.76L7.45,10.9A.17.17,0,0,1,7.39,11.13Z"/></g>,
    20
);

class Toolbar extends React.Component {
    public render() {
        return (
            <Container className='bp3-dark'>
                <ToolbarGroup align={Alignment.LEFT}>
                    <ButtonGroup className='bp3-dark'>
                        <ToolbarButton icon={pointerIcon} active={true}/>
                    </ButtonGroup>
                    <Navbar.Divider />
                    <ButtonGroup className='bp3-dark'>
                        <ToolbarButton icon="widget" />
                        <ToolbarButton icon="edit" />
                    </ButtonGroup>
                </ToolbarGroup>
            </Container>

        )
    }
}

export default Toolbar;