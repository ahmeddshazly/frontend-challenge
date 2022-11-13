// eslint-disable-next-line unused-imports/no-unused-imports
import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles/createTheme' {
  interface Theme {
    custom: {
      palette: {
        graphColorOne: {
          light: string;
          main: string;
          dark: string;
        };
        graphColorTwo: {
          light: string;
          main: string;
          dark: string;
        };
        history: {
          summaryBorder: string;
        };
      };
      size: {
        drawerWidthOpen: number;
        drawerWidthClosed: number;
        navBarHeight: number;
      };
      transition: {
        drawerTransition: string;
      };
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    custom?: {
      palette?: {
        graphColorOne?: {
          light?: string;
          main?: string;
          dark?: string;
        };
        graphColorTwo?: {
          light?: string;
          main?: string;
          dark?: string;
        };
        history?: {
          summaryBorder: string;
        };
      };
      size?: {
        drawerWidthOpen?: number;
        drawerWidthClosed?: number;
        navBarHeight?: number;
      };
      transition?: {
        drawerTransition: string;
      };
    };
  }
}
