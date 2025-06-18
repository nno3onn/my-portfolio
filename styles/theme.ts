export type FontColorKey = "black" | "paragraph" | "white" | "grey1" | "grey2" | "blue" | "pink" | "inactive-light" | "inactive-dark";
export type FontSizeKey = "xs" | "sm" | "base" | "lg" | "xl" | "xxl" | "xxxl";
export type BackgroundColorKey =
  | "transparent"
  | "white"
  | "black"
  | "grey"
  | "orange"
  | "hover-orange"
  | "yellow"
  | "blue"
  | "header-box-shadow"
  | "box-shadow";

const fontColor: Record<FontColorKey, string> = {
  black: "#000",
  paragraph: "#444",
  white: "#fff",
  grey1: "#6C757D",
  grey2: "#ccc",
  blue: "#258dbb",
  pink: "#ED3770",
  "inactive-light": "#000000B2",
  "inactive-dark": "#FFFFFFB2",
};

const fontSize: Record<FontSizeKey, string> = {
  xs: "12px",
  sm: "14px",
  base: "16px",
  lg: "20px",
  xl: "24px",
  xxl: "48px",
  xxxl: "64px",
};

const backgroundColor: Record<BackgroundColorKey, string> = {
  transparent: "transparent",
  white: "#fff",
  black: "#222",
  grey: "#f5f5f5",
  orange: "#f4623a",
  "hover-orange": "#ec2d13",
  yellow: "#f9c51d",
  blue: "#1d809f",
  "header-box-shadow": "2px 2px 2px rgba(68,68,68,.2)",
  "box-shadow": "1rem 1rem 1rem rgba(68,68,68,.2)",
};

export const theme = {
  fontSize,
  fontColor,
  backgroundColor,
};

export type ThemeType = typeof theme;
export default theme;
