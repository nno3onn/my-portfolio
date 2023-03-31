import { DefaultTheme } from "styled-components";

const fontSize = {
  xs: "12px",
  sm: "14px",
  base: "16px",
  lg: "20px",
  xl: "24px",
  xxl: "48px",
  xxxl: "64px",
};

const fontColor = {
  black: "#000",
  paragraph: "#444",
  white: "#fff",
  grey1: "#6C757D",
  grey2: "#ccc",

  "inactive-light": "#000000B2",
  "inactive-dark": "#FFFFFFB2",
};

const backgroundColor = {
  white: "#fff",
  black: "#222",
  orange: "#f4623a",
  "hover-orange": "#ec2d13",

  "box-shadow": "1rem 1rem 1rem 0 rgba(68,68,68,.2)",
};

const theme: DefaultTheme = {
  fontSize,
  fontColor,
  backgroundColor,
};

export default theme;
