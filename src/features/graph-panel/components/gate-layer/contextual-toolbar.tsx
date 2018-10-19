import { Popover, Position } from "@blueprintjs/core";
import * as React from "react";
import { IGateShape } from "../../interfaces";

interface IProps {
  isGatingLive: boolean;
  selectedGates: IGateShape[];
}

const ContextualToolbar = (props: IProps) => {
  const { isGatingLive, selectedGates } = props;
  return (
    <>
      {selectedGates.length === 1 &&
        !isGatingLive && (
          <Popover
            content={<div>test</div>}
            enforceFocus={false}
            key={"242424242424242"}
            hasBackdrop={false}
            isOpen={true}
            minimal={true}
            position={Position.RIGHT_TOP}
            target={<div />}
          />
        )}
    </>
  );
};

export default ContextualToolbar;
