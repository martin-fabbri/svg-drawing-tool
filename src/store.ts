import { combineReducers } from 'redux';
import { GraphPanelState, reducer } from './graph-panel/duck/reducers';

interface IAppState {
    graphPanel: GraphPanelState;
}

const rootReducer = combineReducers<IAppState>({
    graphPanel: reducer,
});


export default rootReducer;
