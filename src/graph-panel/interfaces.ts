// tslint:disable-next-line
interface GraphItem {
    delete: boolean;
}

export interface IReloadModePayload {
    graphItems: GraphItem[];
    mainGraphIndex: number;
}