import * as React from 'react';
import Button from './button';
import AppContext from './context';

interface IProps {
    debug?: boolean;
}

const Toobar = (props: IProps) => {
    return (
        <>
            <Button>Edit</Button>
            <Button>Save</Button>
            <AppContext.Consumer>
                {({ toggleTheme }) => <Button onClick={toggleTheme}>Toggle</Button> }
            </AppContext.Consumer>
        </>
    );
};

export default Toobar;