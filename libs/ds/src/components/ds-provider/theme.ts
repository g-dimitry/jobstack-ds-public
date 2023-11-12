export type ColorScheme = "dark" | "light";

export interface ColorSchemePalette {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
}

export type TypographyTypeScale =
  | "display"
  | "headline"
  | "body"
  | "label"
  | "title";
export type TypographySize = "small" | "medium" | "large";

export interface TypographyStyles {
  fontFamilyName: string;
  fontFamilyStyle: string;
  fontWeight: number;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
}

export interface ThemeConfig {
  schemes: Record<ColorScheme, ColorSchemePalette>;
  styles: Record<TypographyTypeScale, Record<TypographySize, TypographyStyles>>;
  spacingUnit: number;
}
export interface Theme extends ThemeConfig {
  spacing: (multiple: number) => number;
  getTypographyStyles: (
    themetypeScale: TypographyTypeScale,
    size: TypographySize
  ) => string;
}
