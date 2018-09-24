import {Colors} from "@blueprintjs/core";

export interface ITheme {
    backgroundColor: string,
    textLarge: number,
}

const theme: ITheme = {
    backgroundColor: Colors.GRAY5, // Colors.DARK_GRAY3,
    textLarge: 1, // <em> units
};

export default theme;
