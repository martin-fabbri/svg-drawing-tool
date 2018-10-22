import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";
import theme, { ITheme } from "./theme";

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ITheme>;

export { css, injectGlobal, keyframes, theme, ThemeProvider };
export default styled;
