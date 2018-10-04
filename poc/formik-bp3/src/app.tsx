import {Button, Classes, FormGroup, InputGroup, Intent} from "@blueprintjs/core";
import {Field, FieldProps, Form, Formik, FormikProps} from "formik";
import * as React from 'react';

interface IShapeValues {
    name: string;
}

const validateShapeName = (value: string) => {
    let error = '';
    if (!value) {
        error = 'Required';
    }
    return error;
};

const submit = (values: IShapeValues) => {
    console.log('on submit', values);
};

const shapeNameInput = ({field, form}: FieldProps<IShapeValues>) => (
    <FormGroup
        helperText={form.touched.name && form.errors.name ? form.errors.name : ''}
        label="Shape Name"
        labelFor="shape-name">
        <InputGroup id="shape-name" {...field} placeholder="Shape Name"/>
    </FormGroup>
);

const render = ({isSubmitting}: FormikProps<IShapeValues>) => {
    return (
        <Form>
            <Field
                name='name'
                render={shapeNameInput}
                validate={validateShapeName}
                type='text'/>
            <div className={Classes.DIALOG_FOOTER}>
                <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                    <Button type='button' disabled={isSubmitting}>Cancel</Button>
                    <Button intent={Intent.PRIMARY} type='submit' disabled={isSubmitting}>Ok</Button>
                </div>
            </div>
        </Form>
    );
};

class App extends React.Component {
  public render() {
    return (
        <Formik initialValues={{name: 'Lymphocytes'}}
                onSubmit={submit}
                render={render}/>
    );
  }
}

export default App;
