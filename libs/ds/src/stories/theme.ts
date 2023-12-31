import { ThemeConfig } from "../components/ds-provider/theme";

export const theme: ThemeConfig = {
  schemes: {
    light: {
      primary: "#6750a4",
      onPrimary: "#ffffff",
      primaryContainer: "#e9ddff",
      onPrimaryContainer: "#22005d",
      background: "#fffbff",
      onBackground: "#1c1b1e",
      surface: "#fdf8fd",
      onSurface: "#1c1b1e",
      surfaceVariant: "#e7e0eb",
    },
    dark: {
      primary: "#cfbcff",
      onPrimary: "#381e72",
      primaryContainer: "#4f378a",
      onPrimaryContainer: "#e9ddff",
      background: "#1c1b1e",
      onBackground: "#e6e1e6",
      surface: "#141316",
      onSurface: "#cac5ca",
      surfaceVariant: "#49454e",
    },
  },
  styles: {
    display: {
      large: {
        fontFamilyName: "Roboto",
        fontFamilyStyle: "Regular",
        fontWeight: 400,
        fontSize: 57,
        lineHeight: 64,
        letterSpacing: -0.25,
      },
      medium: {
        fontFamilyName: "Roboto",
        fontFamilyStyle: "Regular",
        fontWeight: 400,
        fontSize: 45,
        lineHeight: 52,
        letterSpacing: 0,
      },
      small: {
        fontFamilyName: "Roboto",
        fontFamilyStyle: "Regular",
        fontWeight: 400,
        fontSize: 36,
        lineHeight: 44,
        letterSpacing: 0,
      },
    },
    headline: {
      large: {
        fontFamilyName: "Roboto",
        fontFamilyStyle: "Regular",
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 40,
        letterSpacing: 0,
      },
      medium: {
        fontFamilyName: "Roboto",
        fontFamilyStyle: "Regular",
        fontWeight: 400,
        fontSize: 28,
        lineHeight: 36,
        letterSpacing: 0,
      },
      small: {
        fontFamilyName: "Roboto",
        fontFamilyStyle: "Regular",
        fontWeight: 400,
        fontSize: 24,
        lineHeight: 32,
        letterSpacing: 0,
      },
    },
    body: {
      large: {
        fontFamilyName: "Roboto",
        fontFamilyStyle: "Regular",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.5,
      },
      medium: {
        fontFamilyName: "Roboto",
        fontFamilyStyle: "Regular",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.25,
      },
      small: {
        fontFamilyName: "Roboto",
        fontFamilyStyle: "Regular",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.4000000059604645,
      },
    },
    label: {
      large: {
        fontFamilyName: "Roboto",
        fontFamilyStyle: "Medium",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.10000000149011612,
      },
      medium: {
        fontFamilyName: "Roboto",
        fontFamilyStyle: "Medium",
        fontWeight: 500,
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.5,
      },
      small: {
        fontFamilyName: "Roboto",
        fontFamilyStyle: "Medium",
        fontWeight: 500,
        fontSize: 11,
        lineHeight: 16,
        letterSpacing: 0.5,
      },
    },
    title: {
      large: {
        fontFamilyName: "Roboto",
        fontFamilyStyle: "Regular",
        fontWeight: 400,
        fontSize: 22,
        lineHeight: 28,
        letterSpacing: 0,
      },
      medium: {
        fontFamilyName: "Roboto",
        fontFamilyStyle: "Medium",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15000000596046448,
      },
      small: {
        fontFamilyName: "Roboto",
        fontFamilyStyle: "Medium",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.10000000149011612,
      },
    },
  },
  spacingUnit: 4,
};
