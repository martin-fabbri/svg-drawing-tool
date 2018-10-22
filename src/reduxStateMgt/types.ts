// tslint:disable-next-line
export interface GroupState {
  uuid?: string;
  // name: string;
  // dataSources?: string[];
  // parents?: string[];
  // children?: string[];
  // role?: string; // TODO remove this
  // live?: boolean;
  // synchronized?: boolean;
  // color?: string;
  // flagged?: boolean;
  // rootPopulationDef?: string;
  // rootPopulation?: string;
}

// tslint:disable-next-line
export interface PopulationDef {
  uuid?: string;
  // name: string;
  // type: PopulationDefTypes;
  // groupId?: string;
  // annotation?: string;
  // parents?: string[];
  // children?: string[];
  // gateDefinition?: any;
}

// tslint:disable-next-line
export interface ParameterAxis {
  parameterSpec?: any;
  transform?: any;
}
