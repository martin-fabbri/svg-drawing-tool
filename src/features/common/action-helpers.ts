import { Action } from "../graph-panel/duck/types";

function createAction<T extends string>(type: T): Action<T>;
function createAction<T extends string, P>(type: T, payload: P): Action<T, P>;
function createAction<T extends string, P>(type: string, payload?: P) {
  return payload === undefined ? { type } : { type, payload };
}

export default createAction;
