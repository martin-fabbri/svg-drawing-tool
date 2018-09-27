// @ts-ignore
import { compose, createStore } from 'redux';
import rootReducer from './store';

export const configureStore = () => {
    const store = createStore(
        rootReducer,
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};
