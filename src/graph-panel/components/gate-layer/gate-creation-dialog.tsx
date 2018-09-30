import {Button, Classes, Dialog, FormGroup, InputGroup, Intent} from "@blueprintjs/core";
import * as React from 'react';
import styled from "styled-components";
import {IGateShape} from './index';

interface IProps {
    activeGate: IGateShape | undefined;
    handleOnCancel: () => void;
    handleOnOk: () => void;
    isOpen: boolean;
}

const SubPopulationFormGroup = styled(FormGroup)`
    font-size: 14px !important;
    > label {
        font-size: 14px !important;
    }
`;

class GateCreationDialog extends React.Component<IProps> {

    public render() {
        const {activeGate, handleOnCancel, handleOnOk, isOpen} = this.props;
        if (!activeGate) {
            return null;
        }

        const {name} = activeGate;

        return (
            <Dialog
                icon='info-sign'
                title='Subpopulation identification'
                onClose={handleOnCancel}
                isOpen={isOpen}
            >
                <div className={Classes.DIALOG_BODY}>
                    <SubPopulationFormGroup
                        label="Enter the name of this subpopulation:"
                        labelFor="name"
                    >
                        <InputGroup id="name"
                                    placeholder="Subpopulation name"
                                    value={name}
                                    autoFocus={true}
                        />
                    </SubPopulationFormGroup>
                </div>
                <div className={Classes.DIALOG_FOOTER}>
                    <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                        <Button onClick={handleOnCancel}>Cancel</Button>
                        <Button onClick={handleOnOk} intent={Intent.PRIMARY}>Ok</Button>
                    </div>
                </div>
            </Dialog>
        );
    }
};

export default GateCreationDialog;