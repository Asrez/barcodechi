interface IBgColorVariants {
  primary: string;
  primaryReverse: string;
  secondary: string;
  gray: string;
  errorLight: string;
  successLight: string;
  infoLight: string;
  InfoLight2: string;
  info: string;
  warningLight: string;
  errorDark: string;
  successDark: string;
  infoDark: string;
  InfoDark2: string;
  warningDark: string;
}

interface ITextColorVariants {
  primary: string;
  primaryReverse: string;
  secondary: string;
  errorLight: string;
  successLight: string;
  infoLight: string;
  InfoLight2: string;
  info: string;
  warningLight: string;
  errorDark: string;
  successDark: string;
  infoDark: string;
  InfoDark2: string;
  warningDark: string;
}

interface IBorderSizeVariants {
  primary: string;
}

interface IShadowVariants {
  sm: string;
  md: string;
  lg: string;
}

type ThemeOb = {
  mode: string;
  colors: {
    shadow: IShadowVariants;
    text: ITextColorVariants;
    background: IBgColorVariants;
    border: IBorderSizeVariants;
  };
};

interface Theme {
  light: ThemeOb;
  dark: ThemeOb;
}

interface ThemeProps {
  children: React.ReactNode;
}

type ThemeVariant = Theme["light" | "dark"];

interface IGlobalTheme extends ThemeVariant {
  mode: "dark" | "light";
}

export type { IGlobalTheme, Theme, ThemeProps };
