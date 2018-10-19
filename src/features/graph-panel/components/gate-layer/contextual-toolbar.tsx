import {Popover, Position} from "@blueprintjs/core";
import * as React from "react";
import {withGraphPanelContext} from "../../../../../poc/context-poc/src/context";

interface IProps {
    isGating?: boolean;
}

const ContextualToolbar = (props: IProps) => {
    const {selected} = props;
    if (selectedGates.length > 1) {

    }
    return (
        {(selectedGates.length === 1 && !isGatingLive) &&
        <Popover
            content={<div>test</div>}
            enforceFocus={false}
            key={'242424242424242'}
            hasBackdrop={false}
            isOpen={true}
            minimal={true}
            position={Position.RIGHT_TOP}
            target={<div/>}
        />
}
)
    ;
}

return withGraphPanelContext(ContextualToolbar);

