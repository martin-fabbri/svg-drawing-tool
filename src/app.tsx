import * as React from "react";
import GateLayer from "./features/graph-panel/components/gate-layer";
import Toolbar from "./features/graph-panel/components/toolbar";
import { GraphPanelTools } from "./features/graph-panel/constants";
import GraphPanelContext from "./features/graph-panel/duck/context";
import styled from "./styled-components";

// import {connect} from 'react-redux';
// import {actions} from './graph-panel/duck/actions'
// import {GraphPanelState} from "./graph-panel/duck/reducers";
// import {IAppState} from "./store";

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-areas:
    "toolbar"
    "stage";
  grid-gap: 2px;
  grid-template-rows: 50px auto;
  justify-items: stretch;

  // full height
  height: 100%;
`;

const StageArea = styled.div`
  grid-area: stage;
  width: 100%;
  height: 100%;
`;

const ToolbarArea = styled.div`
  grid-area: toolbar;
  width: 100%;
  height: 100%;
`;

interface IProps {
  // graphPanel: GraphPanelState;
  // setActiveTool: typeof actions.setActiveTool,
  debug?: boolean;
}

interface IContextState {
  activeTool: GraphPanelTools;
}

class App extends React.Component<IProps, IContextState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      activeTool: GraphPanelTools.Selection,
    };
  }

  public render() {
    // tslint:disable-next-line
    console.log("Rendering: GraphPanel");
    const { activeTool } = this.state;
    return (
      <Container>
        <GraphPanelContext.Provider
          value={{
            activeTool,
            onToolSelected: this.handleOnToolSelected,
            selectedGroup: {},
            selectedPopDef: {},
          }}
        >
          <ToolbarArea>
            <Toolbar />
          </ToolbarArea>
          <StageArea>
            <GateLayer
              xParameterDef={{}}
              yParameterDef={{}}
              style={{
                height: `100%`,
                position: "absolute",
                right: 0,
                top: 0,
                width: `100%`,
              }}
            />
          </StageArea>
        </GraphPanelContext.Provider>
      </Container>
    );
  }

  private handleOnToolSelected = (selectedTool: GraphPanelTools) => {
    console.log(`${selectedTool} tool was selected`);

    switch (selectedTool) {
      case GraphPanelTools.Rectangle:
      case GraphPanelTools.Ellipse:
      case GraphPanelTools.Polygon:
      case GraphPanelTools.Spider:
      case GraphPanelTools.Curly:
      case GraphPanelTools.Auto:
      case GraphPanelTools.Pencil:
      case GraphPanelTools.Quad:
        this.setState({
          ...this.state,
          activeTool: selectedTool,
        });
        break;
      default:
        this.setState({
          ...this.state,
          activeTool: GraphPanelTools.Selection,
        });
        break;
    }
  };
}

export default App;
