import { Button, Classes, Dialog, FormGroup, InputGroup, Intent } from "@blueprintjs/core";
import { Field, FieldProps, Form, Formik, FormikProps } from "formik";
import * as React from "react";
import { IGateShape } from "../../interfaces";

interface IProps {
  activeGate: IGateShape | undefined;
  handleOnCancel: () => void;
  handleOnOk: (newGate: IGateShape | undefined) => void;
  isOpen: boolean;
}

const nameInput = ({ field, form }: FieldProps<IGateShape>) => (
  <FormGroup
    helperText={form.touched.name && form.errors.name ? form.errors.name : ""}
    label="Enter the name of this subpopulation"
    labelFor="name"
  >
    <InputGroup id="name" {...field} placeholder="Name" />
  </FormGroup>
);

const validateName = (value: string) => {
  let error = "";
  if (!value) {
    error = "Name is required";
  }
  return error;
};

const GateCreationForm = (props: IProps) => {
  const { activeGate, handleOnCancel, handleOnOk, isOpen } = props;

  const render = (formikProps: FormikProps<IGateShape | undefined>) => {
    if (!formikProps) {
      return null;
    }
    const { isSubmitting } = formikProps;
    return (
      <Form>
        <Field name="name" render={nameInput} validate={validateName} type="text" />
        <div className={Classes.DIALOG_FOOTER}>
          <div className={Classes.DIALOG_FOOTER_ACTIONS}>
            <Button type="button" disabled={isSubmitting} onClick={handleOnCancel}>
              Cancel
            </Button>
            <Button intent={Intent.PRIMARY} type="submit" disabled={isSubmitting}>
              Ok
            </Button>
          </div>
        </div>
      </Form>
    );
  };

  return (
    <Dialog
      icon="info-sign"
      title="Subpopulation identification"
      onClose={handleOnCancel}
      isOpen={isOpen}
    >
      <Formik initialValues={activeGate} onSubmit={handleOnOk} render={render} />
    </Dialog>
  );
};

export default GateCreationForm;
