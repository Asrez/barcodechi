import { Theme } from "./types";

const globalColors = {
  errorLight: "#A62E2F",
  errorDark: "#B81F12",
  successLight: "#1AAB49",
  successDark: "#137F36",
  infoLight: "#353E59",
  infoDark: "#35325A",
  info: "#0067CD",
  InfoLight2: "#DAEDFF",
  InfoDark2: "#8EC8FF",
  warningLight: "#FFCA4D",
  warningDark: "#FFB300",
};

export const appTheme: Theme = {
  light: {
    mode: "light",
    colors: {
      background: {
        ...globalColors,
        primary: "#FAFAFA",
        primaryReverse: "#000000",
        secondary: "#F7F7F7",
        gray: "#E1E3E5",
      },
      text: {
        ...globalColors,
        primary: "#000000",
        primaryReverse: "#FAFAFA",
        secondary: "#6D6D70",
      },
      border: {
        primary: "#CECECE",
      },
      shadow: {
        sm: "0 0 28px -11px rgba(0, 0, 0, 0.3)",
        md: "0 0 28px -4px rgba(0, 0, 0, 0.3)",
        lg: "0 0 45px -1px rgba(0, 0, 0, 0.3)",
      },
    },
  },

  dark: {
    mode: "dark",
    colors: {
      background: {
        primary: "#212121",
        primaryReverse: "#FFFFFF",
        secondary: "#6D6D70",
        gray: "#525252",
        ...globalColors,
      },
      text: {
        ...globalColors,
        primary: "#FAFAFA",
        primaryReverse: "#000000",
        secondary: "#939393",
      },
      border: {
        primary: "#939393",
      },
      shadow: {
        sm: "00 0 45px -1px rgba(0, 0, 0, 0.8)",
        md: "00 0 45px -1px rgba(0, 0, 0, 0.8)",
        lg: "00 0 45px -1px rgba(0, 0, 0, 0.8)",
      },
    },
  },
};
