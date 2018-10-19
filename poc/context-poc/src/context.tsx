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

export interface IAppContext {
    theme: ITheme;
    toggleTheme: () => void;
}

const AppContext = React.createContext<IAppContext>({
    theme: themes.dark,
    toggleTheme: () => console.log('Need to implement toogleTheme')
});

export const withGraphPanelContext = <P extends {}>(Component: React.ComponentType<P>) =>
    class WithContext extends React.PureComponent<P> {
        public render() {
            return (
                <AppContext.Consumer>
                    {(context: IAppContext) => <Component {...this.props} {...context} />}
                </AppContext.Consumer>
            );
        }
    };

export default AppContext;