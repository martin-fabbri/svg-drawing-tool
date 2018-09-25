import * as React from 'react';
import styled from './styled-components';
import FjIcon from './toolbar-icons';

const Container = styled.div`
    width: 150px;
    height: 100px;
`;

const Content = styled.div`
    display: flex;
    align-items: flex-start;
`;

const TooltipIcon = styled.div`
    width: 40px;
    height: 40px;
`;

const TooltipText = styled.div`
    
`;

export enum Tooltips {
    select = 'select',
}

const tooltipContent = {
    select : {
        icon: FjIcon.pointerIcon,
        text: 'This is the tool to select objects.',
        title: 'Selection (Arrow)',
    }
};

interface IProps {
    id: Tooltips;
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