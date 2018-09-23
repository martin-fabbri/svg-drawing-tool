import * as Konva from "konva";
import * as React from "react";
import { Transformer } from "react-konva";

interface IProps {
    targetName: string;
}

class Handler extends React.Component<IProps> {
    private readonly transformerRef = React.createRef<Konva.Transformer>();

    public componentDidMount() {
        const { targetName } = this.props;
        const transformer = this.transformerRef.current;
        if (!transformer) {
            return;
        }
        const stage = transformer.getStage();
        const target = stage.findOne(`.${targetName}`);
        transformer.attachTo(target);
        transformer.getLayer().batchDraw();
    }

    public render() {
        return (
            <Transformer
                ref={this.transformerRef}
            />
        );
    }
}

export default Handler;