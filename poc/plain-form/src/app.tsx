import {colors, createMuiTheme, CssBaseline, MuiThemeProvider, Paper} from "@material-ui/core";
import * as React from 'react';
import Form from './form';

const theme = createMuiTheme({
    palette: {
        primary: {
            dark: colors.purple[700],
            light: colors.purple[300],
            main: colors.purple[500],
        },
        secondary: {
            dark: colors.green[700],
            light: colors.green[300],
            main: colors.green[500],
        },
    },
});

// const styles = theme => ({
//     icon: {
//         marginRight: theme.spacing.unit,
//     },
//     root: {
//         paddingTop: theme.spacing.unit * 20,
//         textAlign: 'center',
//     },
// });

class App extends React.Component {
  public render() {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Paper>
                <Form />
            </Paper>
        </MuiThemeProvider>
    );
  }
}

export default App;
