import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';
import {injectGlobal, theme, ThemeProvider} from "./styled-components";

// tslint:disable-next-line
injectGlobal`
    html {
        background-color: ${theme.backgroundColor};
        text-size-adjust: 100%;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto';
        font-size: 22px;
    }
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root') as HTMLElement
);
