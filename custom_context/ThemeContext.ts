import * as React from 'react';
import { ThemeKeys } from '../styles/themes';

export type ThemeContextType = {
  theme: ThemeKeys;
  setTheme: React.Dispatch<React.SetStateAction<ThemeKeys>>;
} | null;

const ThemeContext = React.createContext<ThemeContextType>(null);
export default ThemeContext
