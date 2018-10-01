import {FormControl, FormHelperText, Grid, Input, InputLabel} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import * as React from 'react';
import MiniFormik from "./mini-formik";

interface IProps {
    debug?: boolean;
}

interface IState {
    firstName: string;
    firstNameError?: string;
    lastName: string;
    lastNameError?: string;
    username: string;
    usernameError?: string;
    email: string;
    emailError?: string;
    password: string;
    passwordError?: string;
}

class Form extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            email: '',
            emailError: '',
            firstName: '',
            firstNameError: '',
            lastName: '',
            lastNameError: '',
            password: '',
            passwordError: '',
            username: '',
            usernameError: '',
        };
    }

    public render() {
        return (
            <MiniFormik initialValues={this.state}>
                {({handleBlur, handleChange, handleSubmit, values}) =>
                    <form onSubmit={handleSubmit}>
                        <Grid container={true} spacing={24}>
                            <Grid item={true} xs={12}>
                                <FormControl error={true}
                                             aria-describedby="component-error-text"
                                             required={true}
                                >
                                    <InputLabel htmlFor="component-error">Name</InputLabel>
                                    <Input id="component-error" name="firstName" value={values.firstName}
                                           onChange={handleChange} />
                                    <FormHelperText id="component-error-text">Error</FormHelperText>
                                </FormControl>
                            </Grid>
                            {/*<Grid item={true} xs={12}>*/}
                                {/*<TextField*/}
                                    {/*name="lastName"*/}
                                    {/*label="Last Name"*/}
                                    {/*margin="dense"*/}

                                    {/*value={lastName}*/}
                                    {/*onChange={handleChange}*/}
                                {/*/>*/}
                            {/*</Grid>*/}

                            {/*<Grid item={true} xs={12}>*/}
                                {/*<TextField*/}
                                    {/*name="email"*/}
                                    {/*label="Email"*/}
                                    {/*margin="dense"*/}

                                    {/*value={email}*/}
                                    {/*onChange={handleChange}*/}
                                {/*/>*/}
                            {/*</Grid>*/}

                            {/*<Grid item={true} xs={12}>*/}
                                {/*<TextField*/}
                                    {/*name="username"*/}
                                    {/*label="Username"*/}
                                    {/*margin="dense"*/}

                                    {/*value={username}*/}
                                    {/*onChange={handleChange}*/}
                                {/*/>*/}
                            {/*</Grid>*/}

                            {/*<Grid item={true} xs={12}>*/}
                                {/*<TextField*/}
                                    {/*name="password"*/}
                                    {/*label="Password"*/}
                                    {/*margin="dense"*/}
                                    {/*type="password"*/}
                                    {/*value={password}*/}
                                    {/*onChange={handleChange}*/}
                                {/*/>*/}
                            {/*</Grid>*/}

                            <Grid item={true} xs={12}>
                                <Button variant='contained' color='primary' type="submit">Submit</Button>
                            </Grid>
                        </Grid>
                    </form>
                }
            </MiniFormik>
        );
    }

}

export default Form;