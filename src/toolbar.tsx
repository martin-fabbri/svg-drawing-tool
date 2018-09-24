import {ButtonGroup} from "@blueprintjs/core";
import {Button} from "@blueprintjs/core/lib/cjs";
import * as React from 'react';
import styled from './styled-components';

const ToolbarButton = styled(Button)`
    margin-right: 1px !important;
    // .bp3-dark {
    //     margin-right: 1px !important;
    // }
    // border-radius: 100%;
    // min-width: 30px;
    // min-height: 35px;
    // background: #57A5E0 !important;
    // box-shadow: 0px 6px 10px rgba(0,0,0,0.10)  !important;
    // span {
    //     color: #fff !important;
    // }
`;

class Toolbar extends React.Component {
    public render() {
        return (
            <ButtonGroup className='bp3-dark'>
                <ToolbarButton icon="select"/>
                <ToolbarButton icon="widget" />
                <ToolbarButton icon="edit" />
            </ButtonGroup>
        )
    }
}

export default Toolbar;