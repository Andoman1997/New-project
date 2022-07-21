import typography from './typography';
import colors from './colors';
import radius from './radius';
import indents from './indents';
import breakpoints from './breakpoints';

export const theme = {
  typography,
  colors,
  radius,
  indents,
  breakpoints,
};

export type ThemeInterface = typeof theme;
