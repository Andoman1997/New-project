import { useContext } from 'react';
import { ThemeContext, ThemeInterface } from 'src/styled-components';

export const useTheme = () => useContext<ThemeInterface>(ThemeContext);
