import { createTheme } from '@mui/material';
import { cyan, yellow } from '@mui/material/colors';

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: '#e60000',
            dark: '#340000',
            light: '#eb1c23',
            contrastText: '#ffffff',
        },
        secondary: { 
            main: '#626262',
            dark: '#363636',
            light: '#cdcdcd',
            contrastText: '#ffffff',
        },
        background: {
            paper: '#303134',
            default: '#202124',
        }
    }
});