interface IGraphItem {
  delete: boolean;
}

export interface IReloadModePayload {
  graphItems: IGraphItem[];
  mainGraphIndex: number;
}

export enum GateType {
  Ellipse = "Ellipse",
  Rectangle = "Rectangle",
  Quad = "Quad",
  Spider = "Spider",
  Polygon = "Polygon",
}

export interface IGateShape {
  uuid: string;
  annotation?: string;
  x: number;
  y: number;
  dx: number;
  dy: number;
  width: number;
  height: number;
  name?: string;
  type: GateType;
  stroke?: string;
  fill?: string;
  strokeWidth?: number;
  label?: IGateLabel;
}

export interface IGateLabel {
  offsetX: number;
  offsetY: number;
  text: string;
  annotation: string;
}
