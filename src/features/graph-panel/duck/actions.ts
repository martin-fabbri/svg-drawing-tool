import createAction from "../../common/action-helpers";
import { GraphPanelTools } from "../constants";
import { IReloadModePayload } from "../interfaces";
import { ActionsUnion } from "./types";

export const ADD_MODE = "GraphPanel/ADD_MODE";
export const CHANGE_MODE = "GraphPanel/CHANGE_MODE";
export const CLOSE_MODE = "GraphPanel/CLOSE_MODE";
export const RELOAD_MODE = "GraphPanel/RELOAD_MODE";
export const SET_ACTIVE_TOOL = "GraphPanel/SET_ACTIVE_TOOL";
export const SET_MAIN_PLOT = "GraphPanel/SET_MAIN_PLOT";
export const TOGGLE_GATING_MODE = "GraphPanel/TOGGLE_GATING_MODE";
export const TOGGLE_ACTIVE_GATING = "GraphPanel/TOGGLE_ACTIVE_GATING";

export const actions = {
  reloadMode: (payload: IReloadModePayload) => createAction(RELOAD_MODE, payload),
  setActiveTool: (tool: GraphPanelTools) => createAction(SET_ACTIVE_TOOL, tool),
  setMainPlot: (mainPlotIndex: number) => createAction(SET_MAIN_PLOT, mainPlotIndex),
  toggleActiveDrawing: () => createAction(TOGGLE_ACTIVE_GATING),
  toggleDrawingMode: () => createAction(TOGGLE_GATING_MODE),
};

export type ActionsType = ActionsUnion<typeof actions>;
