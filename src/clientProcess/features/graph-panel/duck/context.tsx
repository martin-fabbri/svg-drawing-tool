import * as React from "react";
import { GroupState, PopulationDef } from "../../../reduxStateMgt/types";
import { GraphPanelTools } from "../constants";

export interface IGraphPanelContext {
  activeTool: GraphPanelTools;
  onToolSelected: (selectedTool: GraphPanelTools) => void;
  selectedPopDef?: PopulationDef;
  selectedGroup?: GroupState;
}

const GraphPanelContext = React.createContext<IGraphPanelContext>({
  activeTool: GraphPanelTools.Selection,
  onToolSelected: (selectedTool: GraphPanelTools) =>
    console.error("onToolSelected has not been implemented"),
});

export const withGraphPanelContext = <P extends {}>(Component: React.ComponentType<P>) =>
  class WithContext extends React.PureComponent<P> {
    public render() {
      return (
        <GraphPanelContext.Consumer>
          {(context: IGraphPanelContext) => <Component {...this.props} {...context} />}
        </GraphPanelContext.Consumer>
      );
    }
  };

export default GraphPanelContext;
