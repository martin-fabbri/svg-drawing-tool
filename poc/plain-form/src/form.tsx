import * as React from 'react';

interface IProps {
    debug?: boolean;
}

interface IState {
    firstname: string;
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
            firstname: '',
            lastName: '',
            password: '',
            username: '',
        };
    }

    public render() {
        const {email, firstname, lastName, password, username} = this.state;
        return (
            <form action="">
                <input type="text" placeholder='First Name' value={firstname}/>
                <input type="text" placeholder='Last Name' value={lastName}/>
                <input type="text" placeholder='Email' value={email}/>
                <input type="text" placeholder='Username' value={username}/>
                <input type="password" placeholder='Password' value={password}/>
            </form>
        )
    }
}

export default Form;