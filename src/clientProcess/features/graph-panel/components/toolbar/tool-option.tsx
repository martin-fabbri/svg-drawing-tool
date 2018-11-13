import { Button, Icon, Position, Tooltip } from "@blueprintjs/core";
import * as React from "react";
import styled, { css } from "src/styled-components";
import { GraphPanelTools } from "../../constants";
import FjIcon from "./toolbar-icons";
import ToolbarTooltip from "./toolbar-tooltip";

const toolOptions = {
  auto: {
    icon: FjIcon.autoGateIcon,
    text: "Create a polygon matching the distribution of the events in these two dimensions.",
    title: "Auto Gate",
  },
  curly: {
    icon: FjIcon.curlyGateIcon,
    text: "Exponential curves in each dimension to better model increases in the data.",
    title: "Curly Quads",
  },
  ellipse: {
    icon: FjIcon.ellipseIcon,
    text: "This is the tool to draw round circles.",
    title: "Ellipse",
  },
  pencil: {
    icon: <Icon icon="edit" />,
    text: "Create a polygon gate drawing a region of interest.",
    title: "Pencil",
  },
  polygon: {
    icon: FjIcon.polyIcon,
    text: "Create a polygon gate by clicking to make new vertices. Double click to complete.",
    title: "Polygon",
  },
  quad: {
    icon: FjIcon.quadIcon,
    text:
      "Four rectangular gates sharing a common center point used to divide non-overlapping populations.",
    title: "Quad",
  },
  rectangle: {
    icon: FjIcon.squareIcon,
    text:
      "Rectangular gates are the most efficient to calculate, making this a primary tool for rough gating.",
    title: "Rectangle",
  },
  selection: {
    icon: FjIcon.pointerIcon,
    text: "This is the tool to select objects.",
    title: "Selection (Arrow)",
  },
  spider: {
    icon: FjIcon.spiderGateIcon,
    text: "Spider Gates are abutting polygons that share common vertices.",
    title: "Spider Gates",
  },
};

const ToolbarButton = styled(Button)`
  margin-right: 1px !important;
  fill: #bfccd6;

  ${props =>
    props.active &&
    css`
      fill: #bfccd6;
      background-color: #137cbd !important;
    `};
`;

interface IProps {
  active: boolean;
  id: GraphPanelTools;
  handleToolSelection: (selectedTool: GraphPanelTools) => void;
}

const ToolbarOption = (props: IProps) => {
  const { id, active, handleToolSelection } = props;
  const { icon } = toolOptions[id];
  const handleToolOptionClick = () => {
    handleToolSelection(id);
  };
  return (
    <Tooltip content={<ToolbarTooltip {...toolOptions[id]} />} position={Position.BOTTOM_LEFT}>
      <ToolbarButton icon={icon} active={active} onClick={handleToolOptionClick} />
    </Tooltip>
  );
};

export default ToolbarOption;
