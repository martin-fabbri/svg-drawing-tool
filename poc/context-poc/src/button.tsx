import * as React from 'react';
import { ReactNode } from "react";
import AppContext from './context';

interface IProps {
    onClick?: ()=>void;
    theme?: string;
    children?: ReactNode;
}

const Button = (props:IProps) => {
    return (
        <AppContext.Consumer>
            {({ theme }) => {
                return (
                    <button style={{background: theme.background, color: theme.foreground}}
                            onClick={props.onClick}>
                        {props.children}
                    </button>
                )
            }}
        </AppContext.Consumer>

    )
};

export default Button;