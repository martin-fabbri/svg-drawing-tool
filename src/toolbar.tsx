import {ButtonGroup} from "@blueprintjs/core";
import {Button} from "@blueprintjs/core/lib/cjs";
import * as React from 'react';
import styled from './styled-components';

const ToolbarButton = styled(Button)`
    border-radius: 100%;
    min-width: 30px;
    min-height: 35px;
    background: #57A5E0 !important;
    box-shadow: 0px 6px 10px rgba(0,0,0,0.10)  !important;
    span {
        color: #fff !important;
    }
`;

class Toolbar extends React.Component {
    public render() {
        return (
            <ButtonGroup vertical={true} minimal={true} large={true}>
                <ToolbarButton icon="select" active={true}/>
                <ToolbarButton icon="widget" />
                <ToolbarButton icon="edit" />
            </ButtonGroup>
        )
    }
}

export default Toolbar;