import {Button, Classes, FormGroup, InputGroup, Intent} from "@blueprintjs/core";
import {Field, FieldProps, Form, Formik, FormikProps} from "formik";
import * as React from 'react';


interface IShapeValues {
    name: string;
}

const submit = (values: IShapeValues) => {
    console.log('on submit', values);
};

const shapeNameInput = ({field, form}: FieldProps<IShapeValues>) => (
    <div>
        <InputGroup id="shape-name" {...field} placeholder="Shape Name"/>
        {form.touched.name && form.errors.name &&
            form.errors.name}
    </div>
);

const render = (formikBag: FormikProps<IShapeValues>) => (
    <Form>
        <FormGroup
            helperText="Shape name is required ..."
            label="Shape Name"
            labelFor="shape-name"
            labelInfo="(required)">
            <Field
                name='name'
                render={shapeNameInput}/>
        </FormGroup>
        <div className={Classes.DIALOG_FOOTER}>
            <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                <Button>Cancel</Button>
                <Button intent={Intent.PRIMARY}>Ok</Button>
            </div>
        </div>
    </Form>
);

class App extends React.Component {
  public render() {
    return (
        <Formik initialValues={{name: 'xyz'}}
                onSubmit={submit}
                render={render}/>
    );
  }
}

export default App;
