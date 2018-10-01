import {Grid, TextField} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import * as React from 'react';
import { ChangeEvent, FormEvent } from 'react';

interface IProps {
    debug?: boolean;
}

interface IState {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
}

class Form extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            username: '',
        };
    }

    public render() {
        const {email, firstName, lastName, password, username} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <Grid container={true} spacing={24}>
                    <Grid item={true} xs={12}>
                        <TextField
                            name="firstName"
                            label="First Name"
                            margin="dense"

                            value={firstName}
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item={true} xs={12}>
                        <TextField
                            name="lastName"
                            label="Last Name"
                            margin="dense"

                            value={lastName}
                            onChange={this.handleChange}
                        />
                    </Grid>

                    <Grid item={true} xs={12}>
                        <TextField
                            name="email"
                            label="Email"
                            margin="dense"

                            value={email}
                            onChange={this.handleChange}
                        />
                    </Grid>

                    <Grid item={true} xs={12}>
                        <TextField
                            name="username"
                            label="Username"
                            margin="dense"

                            value={username}
                            onChange={this.handleChange}
                        />
                    </Grid>

                    <Grid item={true} xs={12}>
                        <TextField
                            name="password"
                            label="Password"
                            margin="dense"
                            type="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </Grid>

                    <Grid item={true} xs={12}>
                        <Button variant='contained' color='primary' type="submit">Submit</Button>
                    </Grid>
                </Grid>



            </form>
        )
    }

    private handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        });
    };

    private handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // tslint:disable-next-line
        console.log('Submitting form', this.state);
    };

}

export default Form;