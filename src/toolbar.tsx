import {Alignment, Button, ButtonGroup, Navbar, NavbarGroup, Position, Tooltip} from "@blueprintjs/core";
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
    fill: #bfccd6;
    
    ${props => props.active && css`
        fill: #bfccd6;
        background-color: #137cbd !important;
    `}
`;


const iconWrapper = (path: any, viewboxDefault = 16) => {
    return (
        <svg
            className="bp3-icon"
            width={viewboxDefault}
            height={viewboxDefault}
            viewBox={`0 0 ${viewboxDefault} ${viewboxDefault}`}
        >
            {path}
        </svg>
    );
};

const pointerIcon = iconWrapper(
    <g data-name="Layer 2">
        <path d="M1.84 0l1.972 12.769a.266.226 0 0 0 .485.106l3.458-4.154 5.961-.48a.266.226 0 0 0 .125-.399z"/>
        <path d="M13.403 14.82l-2.269 1.158a.282.24 0 0 1-.36-.094L3.406 4.247l2.05-1.012 8.042 11.278a.266.226 0 0 1-.094.306z"/>
    </g>
);

const squareIcon = iconWrapper(
    <g data-name="Layer 2">
        <g data-name="Layer 1">
            <path fill-opacity="0" d="M.805 2.946h14.402v10.122H.805z"/>
            <path d="M14.403 3.878v8.244H1.597V3.878h12.806M15.808 2H.204A.192.226 0 0 0 0 2.24v11.52a.192.226 0 0 0 .204.24h15.604a.192.226 0 0 0 .192-.24V2.24a.192.226 0 0 0-.192-.24z"/>
        </g>
    </g>
);

const quadIcon = iconWrapper(
    <g data-name="Layer 2" transform="matrix(.95526 -.00427 0 .93332 .993 1.335)">
        <g data-name="Layer 1">
            <path style={{stroke: "#bfccd6"}} stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" d="M4.71.67V14"/>
            <path style={{stroke: "#bfccd6"}} stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" d="M.67 9.65H14"/>
        </g>
    </g>
);

const ellipseIcon = iconWrapper(
    <g data-name="Layer 2">
        <g data-name="Layer 1">
            <path d="M9.881 14.308c-2.718 0-5.705-2.068-7.117-4.93-1.651-3.33-.63-6.768 2.222-7.507a3.513 2.546 0 0 1 1.186-.142c2.703 0 5.706 2.067 7.117 4.93a12.011 8.705 0 0 1 .526 4.885 4.73 3.428 0 0 1-2.763 2.622 3.423 2.48 0 0 1-1.171.142z" fill-opacity="0" />
            <path d="M6.172 2.447c1.922 0 4.745 1.567 6.171 4.45a11.095 8.041 0 0 1 .496 4.473 3.919 2.84 0 0 1-2.117 2.11 2.312 1.676 0 0 1-.841.11c-1.937 0-4.744-1.567-6.17-4.45-1.592-3.265-.421-6.062 1.62-6.584a2.537 1.839 0 0 1 .841-.109m0-1.447a4.73 3.428 0 0 0-1.5.185c-3.44.903-4.715 4.668-2.854 8.444 1.592 3.264 4.97 5.44 8.063 5.44a4.414 3.2 0 0 0 1.501-.184c3.439-.925 4.7-4.701 2.838-8.444C12.629 3.176 9.265 1 6.172 1z"/>
        </g>
    </g>
);

const polyIcon = iconWrapper(
    <g data-name="Layer 2">
        <path style={{stroke: "#bfccd6"}} fill-opacity="0" d="M.6 9.56c-.14-1.09.87-7.8 1-8.84a.16.16 0 0 1 .19-.14h10.13L7.28 5.14l5.3 5.71L.75 9.7a.15.15 0 0 1-.15-.14z" stroke-width="1.17" stroke-linecap="round" stroke-linejoin="round" transform="matrix(1.06 0 0 1.21494 1.046 1.042)" data-name="Layer 1"/>
    </g>
);

const autoGateIcon = iconWrapper(
    <g id="Layer_2" data-name="Layer 2" transform="matrix(.91824 0 0 1.2381 1.073 1.022)">
        <g id="Layer_1-2" data-name="Layer 1">
            <path
                d="M2.07 3.72C3.64 3 4.82 4.08 5.83 3 7.25 1.58 9.65-.21 11.9.79a4.38 4.38 0 0 1 2.72 5.48c-.5 1.76-2.41 3.85-6.08 4.36C4.87 11.14 1.91 9.86.92 8a3.13 3.13 0 0 1 1.15-4.28z"
                id="path4154" style={{stroke: "#bfccd6"}} fill-opacity="0" stroke-linecap="round" stroke-linejoin="round"/>
            <circle className="cls-2" cx="3.56" cy="7.05" r="1.33" id="circle4156" style={{stroke: "#bfccd6"}} fill-opacity="0"
                    stroke-width=".67" stroke-linecap="round" stroke-linejoin="round"/>
            <path className="cls-2"
                  d="M6.86 8.23c-1.18-1.3 1.31-5.81 3.49-5.86a3 3 0 0 1 2.94 3.25C12.8 7.52 8 9.43 6.86 8.23z"
                  id="path4158" style={{stroke: "#bfccd6"}} fill-opacity="0" stroke-width=".67" stroke-linecap="round"
                  stroke-linejoin="round"/>
        </g>
    </g>
);

const curlyGateIcon = iconWrapper(
    <g id="Layer_2" data-name="Layer 2" transform="translate(0 1.33)">
        <g id="Layer_1-2" data-name="Layer 1" transform="matrix(.97346 0 0 .95578 .999 -.303)">
            <path style={{stroke: "#bfccd6"}} d="M8.22.67S5.11 5.21 6.1 14" id="path65" fill="none"
                  stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
            <path style={{stroke: "#bfccd6"}} d="M.67 9.82s8 1.81 13-4" id="path67" fill="none" stroke-width="1.33"
                  stroke-linecap="round" stroke-linejoin="round"/>
        </g>
    </g>
);

const spiderGateIcon = iconWrapper(
    <g id="Layer_2" data-name="Layer 2" transform="matrix(.99152 0 0 .95407 .99 1.002)">
        <g id="Layer_1-2" data-name="Layer 1">
            <path style={{stroke: "#bfccd6"}} fill="none" stroke-width="1.33"
                  stroke-linecap="round" stroke-linejoin="round" d="M8.57.67L6.8 7.42 8.57 14"/>
            <path style={{stroke: "#bfccd6"}} d="M.67 10.75C1 10.68 6.8 7.42 6.8 7.42l6.64 1.67" fill="none"
                  stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
    </g>
);

class Toolbar extends React.Component {
    public render() {
        return (
            <Container className='bp3-dark'>
                <ToolbarGroup align={Alignment.LEFT}>
                    <ButtonGroup className='bp3-dark'>
                        <Tooltip content="Selection" position={Position.BOTTOM_LEFT} >
                            <ToolbarButton icon={pointerIcon} active={true}/>
                        </Tooltip>
                    </ButtonGroup>
                    <Navbar.Divider />
                    <ButtonGroup className='bp3-dark'>
                        <ToolbarButton icon={squareIcon} />
                        <ToolbarButton icon={quadIcon} />
                        <ToolbarButton icon={ellipseIcon} />
                        <ToolbarButton icon={polyIcon} />
                        <ToolbarButton icon="edit" />
                        <ToolbarButton icon={autoGateIcon} />
                        <ToolbarButton icon={curlyGateIcon} />
                        <ToolbarButton icon={spiderGateIcon} />
                    </ButtonGroup>
                </ToolbarGroup>
            </Container>

        )
    }
}

export default Toolbar;