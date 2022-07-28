import { useContext } from 'react';
import { ThemeContext, ThemeInterface } from '../styled-components';

export const useTheme = () => useContext<ThemeInterface>(ThemeContext);
