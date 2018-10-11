import {
    Alignment,
    ButtonGroup,
    Navbar,
    NavbarGroup,
} from "@blueprintjs/core";
import * as React from 'react';
import styled from '../../../styled-components';
import {GraphPanelTools} from "../../constants";
import {Consumer as GraphPanelContextConsumer} from '../../duck/context';
import ToolbarOption from "./tool-option";

const Container = styled(Navbar)`
    background-color: #293742 !important;
    height: 40px;
`;

const ToolbarGroup = styled(NavbarGroup)`
    height: 40px;
    padding: 6px;
`;

class Toolbar extends React.PureComponent {
    public render() {
        console.log('Rendering: Toolbar');
        return (
            <GraphPanelContextConsumer>
                {({ activeTool, onToolSelected }) => {
                    return (
                        <Container className='bp3-dark'>
                            <ToolbarGroup align={Alignment.LEFT}>
                                <ButtonGroup className='bp3-dark'>
                                    <ToolbarOption id={GraphPanelTools.Selection}
                                                   active={activeTool === GraphPanelTools.Selection}
                                                   handleToolSelection={onToolSelected}/>
                                </ButtonGroup>
                                <Navbar.Divider />
                                <ButtonGroup className='bp3-dark'>
                                    <ToolbarOption id={GraphPanelTools.Rectangle}
                                                   active={activeTool === GraphPanelTools.Rectangle}
                                                   handleToolSelection={onToolSelected}/>

                                    <ToolbarOption id={GraphPanelTools.Quad}
                                                   active={activeTool === GraphPanelTools.Quad}
                                                   handleToolSelection={onToolSelected}/>

                                    <ToolbarOption id={GraphPanelTools.Ellipse}
                                                   active={activeTool === GraphPanelTools.Ellipse}
                                                   handleToolSelection={onToolSelected}/>

                                    <ToolbarOption id={GraphPanelTools.Polygon}
                                                   active={activeTool === GraphPanelTools.Polygon}
                                                   handleToolSelection={onToolSelected}/>

                                    <ToolbarOption id={GraphPanelTools.Pencil}
                                                   active={activeTool === GraphPanelTools.Pencil}
                                                   handleToolSelection={onToolSelected}/>

                                    <ToolbarOption id={GraphPanelTools.Auto}
                                                   active={activeTool === GraphPanelTools.Auto}
                                                   handleToolSelection={onToolSelected}/>

                                    <ToolbarOption id={GraphPanelTools.Curly}
                                                   active={activeTool === GraphPanelTools.Curly}
                                                   handleToolSelection={onToolSelected}/>

                                    <ToolbarOption id={GraphPanelTools.Spider}
                                                   active={activeTool === GraphPanelTools.Spider}
                                                   handleToolSelection={onToolSelected}/>
                                </ButtonGroup>
                            </ToolbarGroup>
                        </Container>
                    )
                }}
            </GraphPanelContextConsumer>
        )
    }
}

export default Toolbar;