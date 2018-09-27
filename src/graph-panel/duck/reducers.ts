import { GraphPanelModes, GraphPanelTools } from '../constants';
import * as fromActions from './actions';

export const initialState = {
    activeTool: GraphPanelTools.Selection,
    isGatingActive: false,
    isGatingMode: false,
    modes: {
        [GraphPanelModes.ParametersSatellite]: {
            graphItems: [],
            layout: {
                numSatellitePlots: 12,
                templatePrefix: 'satellite-grid-container-'
            },
            mainGraphIndex: 0
        }
    },
    selectedMode: GraphPanelModes.ParametersSatellite
};

export type GraphPanelState = typeof initialState;

export const reducer = (state = initialState, action: fromActions.ActionsType): GraphPanelState => {
  switch (action.type) {
      case fromActions.TOGGLE_GATING_MODE:
          return {
              ...state,
              isGatingMode: !state.isGatingMode,
          };
      case fromActions.TOGGLE_ACTIVE_GATING:
          return {
              ...state,
              isGatingActive: !state.isGatingActive,
          };
      case fromActions.SET_MAIN_PLOT:
          return {
              ...state,
              modes: {
                  ...state.modes,
                  [state.selectedMode] : {
                      ...state.modes[state.selectedMode],
                      mainGraphIndex: action.payload
                  }
              }
          };
      case fromActions.RELOAD_MODE:
          return {
              ...state,
              modes: {
                  ...state.modes,
                  [state.selectedMode]: {
                      ...state.modes[state.selectedMode],
                      graphItems: action.payload.graphItems,
                      mainGraphIndex: action.payload.mainGraphIndex
                  }
              }
          };
      default:
          return state;
  }
};

export default reducer;
