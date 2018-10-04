import {Button, Classes, FormGroup, InputGroup, Intent, Switch} from "@blueprintjs/core";
import {Field, FieldProps, Form, Formik, FormikProps} from "formik";
import * as React from 'react';

interface IShapeValues {
    email: string;
    password: string;
    subscribe: boolean;
}

const validateEmail = (value: string) => {
    let error = '';
    if (!value) {
        error = 'Required';
    }
    return error;
};

const validatePassword = (value: string) => {
    let error = '';
    if (!value) {
        error = 'Required';
    }
    return error;
};

const validateSubscribe = (value: string) => {
    return false;
};

const submit = (values: IShapeValues) => {
    console.log('on submit', values);
};

const emailInput = ({field, form}: FieldProps<IShapeValues>) => (
    <FormGroup
        helperText={form.touched.email && form.errors.email ? form.errors.email : ''}
        label="Email"
        labelFor="email">
        <InputGroup id="email" {...field} placeholder="Email"/>
    </FormGroup>
);

const passwordInput = ({field, form}: FieldProps<IShapeValues>) => (
    <FormGroup
        helperText={form.touched.password && form.errors.password ? form.errors.password : ''}
        label="Password"
        labelFor="password">
        <InputGroup id="password" {...field} placeholder="Password" type="password"/>
    </FormGroup>
);

const subscribeSwitch = ({field, form}: FieldProps<IShapeValues>) => (
        <FormGroup
            helperText={form.touched.subscribe && form.errors.subscribe ? form.errors.subscribe : ''}>
            <Switch {...field} labelElement={<span>Subscribe</span>} checked={form.values.subscribe}/>
        </FormGroup>
);

const render = ({isSubmitting}: FormikProps<IShapeValues>) => {
    return (
        <Form>
            <Field
                name='email'
                render={emailInput}
                validate={validateEmail}
                type='email'/>
            <Field
                name='password'
                render={passwordInput}
                validate={validatePassword}
                type='password'/>
            <Field
                name='subscribe'
                render={subscribeSwitch}
                validate={validateSubscribe}
                type='checkbox'/>
            <div className={Classes.DIALOG_FOOTER}>
                <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                    <Button type='button' disabled={isSubmitting}>Cancel</Button>
                    <Button intent={Intent.PRIMARY} type='submit' disabled={isSubmitting}>Ok</Button>
                </div>
            </div>
        </Form>
    );
};

const App = () => (
    <Formik initialValues={{email: '', password: '', subscribe: true}}
            onSubmit={submit}
            render={render}/>
);

export default App;
