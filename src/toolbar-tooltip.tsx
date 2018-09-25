import {Icon} from "@blueprintjs/core";
import * as React from 'react';
import styled from './styled-components';
import FjIcon from './toolbar-icons';

const Container = styled.div`
    width: 150px;
`;

const Content = styled.div`
    display: flex;
    align-items: flex-start;
`;

const TooltipIcon = styled.div`
    width: 40px;
    height: 40px;
    padding: 5px;
`;

const TooltipText = styled.div`
    font-size: 11px;
    padding: 5px;
`;

type TooltipIds = 'auto' | 'curly' | 'ellipse' | 'select' | 'rectangle' | 'quad' | 'polygon' | 'pencil';

const tooltipContent = {
    auto: {
        icon: FjIcon.autoGateIcon,
        text: 'Create a polygon matching the distribution of the events in these two dimensions.',
        title: 'Auto Gate',
    },
    curly: {
        icon: FjIcon.curlyGateIcon,
        text: 'Exponential curves in each dimension to better model increases in the data.',
        title: 'Curly Quads',
    },
    ellipse: {
        icon: FjIcon.ellipseIcon,
        text: 'This is the tool to draw round circles.',
        title: 'Ellipse',
    },
    pencil: {
        icon: <Icon icon='edit'/>,
        text: 'Create a polygon gate drawing a region of interest.',
        title: 'Pencil',
    },
    polygon: {
        icon: FjIcon.polyIcon,
        text: 'Create a polygon gate by clicking to make new vertices. Double click to complete.',
        title: 'Polygon',
    },
    quad: {
        icon: FjIcon.quadIcon,
        text: 'Four rectangular gates sharing a common center point used to divide non-overlapping populations.',
        title: 'Quad',
    },
    rectangle: {
        icon: FjIcon.squareIcon,
        text: 'Rectangular gates are the most efficient to calculate, making this a primary tool for rough gating.',
        title: 'Rectangle',
    },
    select: {
        icon: FjIcon.pointerIcon,
        text: 'This is the tool to select objects.',
        title: 'Selection (Arrow)',
    },
    spider: {
        icon: FjIcon.spiderGateIcon,
        text: 'Spider Gates are abutting polygons that share common vertices.',
        title: 'Spider Gates',
    },
};

interface IProps {
    id: TooltipIds;
}

const ToolbarTooltip = (props: IProps) => {
    const {id} = props;
    const {icon, text, title} = tooltipContent[id];
    return (
        <Container>
            <h6 style={{color: '#182026'}} className='bp3-heading'>{title}</h6>
            <Content>
                <TooltipIcon>{icon}</TooltipIcon>
                <TooltipText className='bp3-ui-text'>{text}</TooltipText>
            </Content>
        </Container>
    );
};

export default ToolbarTooltip;