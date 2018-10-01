import * as React from 'react';
import {ChangeEvent} from "react";
import {FormEvent} from "react";

type API = ReturnType<MiniFormik['getApi']>;

interface IProps {
    initialValues: any,
    children: (api: API) => React.ReactNode;
}

interface IState {
    values: any;
    touched: {[field: string]: boolean};
    errors: any;
}

type IsFunction<T> = T extends (...args: any[]) => any ? T : never;
const isFunction = <T extends {}>(value: T): value is IsFunction<T> => typeof value === 'function';

class MiniFormik extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            errors: {},
            touched: {},
            values: props.initialValues,
        }
    }

    public render() {
        const {children} = this.props;

        if (!children) {
            return null;
        }

        if (!isFunction(children)) {
            throw new Error('children needs to be a function');
        }
        return children(this.getApi());
    }

    private getApi() {
        return {
            handleBlur: this.handleBlur,
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit,
            values: this.state.values,
        }
    }

    private handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('handleChange', e.target.name, e.target.value);
        this.setState({
            ...this.state,
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value,
            }
        });
    };

    private handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('handleChange', e.target.name, e.target.value);
        this.setState({
            ...this.state,
            touched: {
                ...this.state.values,
                [e.target.name]: true,
            }
        });
    };

    private handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // tslint:disable-next-line
        console.log('Submitting form', this.state);
    };
}

export default MiniFormik;