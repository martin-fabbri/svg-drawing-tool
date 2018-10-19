import * as React from 'react';
import { ReactNode } from "react";
import {IAppContext, withGraphPanelContext} from "./context";

interface IProps {
    onClick?: () => void;
    children?: ReactNode;
}

type PropsWithContext = IProps & IAppContext;

// const Button = (props:IProps) => {
//     return (
//         <AppContext.Consumer>
//             {({ theme }) => {
//                 return (
//                     <button style={{background: theme.background, color: theme.foreground}}
//                             onClick={props.onClick}>
//                         {props.children}
//                     </button>
//                 )
//             }}
//         </AppContext.Consumer>
//
//     )
// };

const Button = (props: IProps) => {
    const {theme} = props as PropsWithContext;
    return (
        <button style={{background: theme.background, color: theme.foreground}}
                onClick={props.onClick}>
            {props.children}
        </button>
    )
};

export default withGraphPanelContext(Button);