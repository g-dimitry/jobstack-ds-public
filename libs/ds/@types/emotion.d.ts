import "@emotion/react";
import { Theme as DSTheme } from "../src/components/ds-provider/theme";
declare module "@emotion/react" {
  export interface Theme extends DSTheme {}
}
