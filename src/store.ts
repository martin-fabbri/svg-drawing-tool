import { combineReducers } from 'redux';
import { GraphPanelState, reducer } from './graph-panel/duck/reducers';

export interface IAppState {
    graphPanel: GraphPanelState;
}

const rootReducer = combineReducers<IAppState>({
    graphPanel: reducer,
});


export default rootReducer;