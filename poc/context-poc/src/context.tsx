import * as React from 'react';

export interface ITheme {
    background: string;
    foreground: string;
}

interface IThemesMap {
    [key: string]: ITheme;
}

export const themes: IThemesMap = {
    dark: {
        background: '#666',
        foreground: '#fff',
    },
    light: {
        background: '#222',
        foreground: '#eee',
    },
};

const AppContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => console.log('Need to implement toogleTheme')
});

export default AppContext;