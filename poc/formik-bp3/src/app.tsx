import {Button, Classes, FormGroup, InputGroup, Intent} from "@blueprintjs/core";
import * as React from 'react';

class App extends React.Component {
  public render() {
    return (
      <form>
          <FormGroup
              helperText="Shape name is required ..."
              label="Shape Name"
              labelFor="shape-name"
              labelInfo="(required)">
              <InputGroup id="shape-name" placeholder="Shape Name" />
          </FormGroup>
          <div className={Classes.DIALOG_FOOTER}>
              <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                  <Button>Cancel</Button>
                  <Button intent={Intent.PRIMARY}>Ok</Button>
              </div>
          </div>
      </form>
    );
  }
}

export default App;
