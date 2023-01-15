import { extendTheme } from '@mui/joy/styles';

const bk = extendTheme({
    breakpoints: {
        values: {
            xxs: 280,
            xs: 380,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
        },
    },
});

export const joyTheme = extendTheme({
    breakpoints: {
        values: {
            xxs: 280,
            xs: 380,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
        },
    },
    components: {
        JoyCircularProgress: {
            styleOverrides: {
                root: {
                    '--_root-size': '6rem',
                    [bk.breakpoints.down('sm')]: {
                        '--_root-size': '5rem',
                    },
                },
                progress: {
                    stroke: '#00D2FF'
                },
                track: {
                    stroke: 'rgba(0,210,255,0.2)',
                }
            },
        },
    },
    typography: {
        'fontFamily': `GilroyRegular, sans-serif`,
        'fontWeightLight': 700,
        'fontWeightRegular': 700,
        'fontWeightBold': 700,
    },
});
