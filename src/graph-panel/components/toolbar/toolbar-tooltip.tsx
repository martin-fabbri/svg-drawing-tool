import * as React from 'react';
import styled from '../../../styled-components';

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

interface IProps {
    icon: React.ReactElement<any>;
    text: string;
    title: string;
}

const ToolbarTooltip = (props: IProps) => {
    const {icon, text, title} = props;
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