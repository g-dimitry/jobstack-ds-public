"use client";

import { PropsWithChildren, createContext, useContext, useMemo } from "react";
import { ThemeConfig, TypographyTypeScale, TypographySize } from "./theme";
import { ThemeProvider } from "@emotion/react";

export interface DSContext extends ThemeConfig {
  spacing: (multiple: number) => number;
}

const dsContext = createContext<DSContext>({} as DSContext);

export const useTheme = () => useContext(dsContext);

export interface DSProviderProps {
  theme: ThemeConfig;
}

export function DSProvider(props: PropsWithChildren<DSProviderProps>) {
  const { theme, children } = props;
  const value = useMemo(
    () => ({
      ...theme,
      spacing(multiple: number) {
        return this.spacingUnit * multiple;
      },
      getTypographyStyles(
        typeScale: TypographyTypeScale,
        size: TypographySize
      ) {
        const styles = this.styles[typeScale][size];
        return `
          font-weight: ${styles.fontWeight};
          font-size: ${styles.fontSize}px;
          line-height: ${styles.lineHeight}px;
          letter-spacing: ${styles.letterSpacing}px;
        `;
      },
    }),
    [theme]
  );
  return (
    <dsContext.Provider value={value}>
      <ThemeProvider theme={{ ...value }}>{children}</ThemeProvider>
    </dsContext.Provider>
  );
}

export * from "./theme";
