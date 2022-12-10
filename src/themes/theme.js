import {createTheme} from '@mui/material';
import GilroyBold from '../assets/fonts/Gilroy-Bold.ttf';

const lightBlue = '#32B6CE';
const bk = createTheme({
    breakpoints: {
        values: {
            xs: 380,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
        },
    },
});
export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 380,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
        },
    },
    palette: {
        primary: {
            light: '#89ECFF',
            main: '#00D2FF'
        },
        secondary: {
            main: '#ffffff'
        }
    },
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {variant: 'h6'},
                    style: {
                        textAlign: 'center',
                        fontFamily: 'GilroyBold, sans-serif',
                        '&:hover': {
                            color: 'red'
                        }

                    },
                },
                {
                    props: {variant: 'subtitle1'},
                    style: {
                        lineHeight: '1rem',
                        fontWeight: '100',
                        'a': {
                            color: '#00D2FF',
                        }
                    },
                },
            ],
        },
        MuiCssBaseline: {
            styleOverrides:
                `@font-face {
                        font-family: 'GilroyBold';
                        font-style: normal;
                        font-display: swap;
                        font-weight: 400;
                        src: local('GilroyBold'), local('GilroyBold'), url(${GilroyBold}) format('woff2');
                        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
                    },
                    `,
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '0.6rem',
                    borderRadius: '1rem',
                    width: '4.5rem',
                    height: '2rem',
                    padding: '0',
                    backgroundColor: `${lightBlue}`,
                    fontSize: '0.7rem',
                    letterSpacing: '2px',
                    color: 'white',
                    [bk.breakpoints.down('xs')]: {
                        height: '1.6rem',
                        width: '3rem',
                    },
                    [bk.breakpoints.down('sm')]: {
                        height: '1.8rem',
                        width: '3.2rem',
                    },
                    'div': {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '0.3rem',
                        marginLeft: '-0.1rem',
                        [bk.breakpoints.down('xs')]: {
                            marginLeft: '-0.3rem',
                        },
                        [bk.breakpoints.down('sm')]: {
                            marginLeft: '-0.2.5rem',
                        },
                    },
                    '&:hover': {
                        border: 'none',
                        outline: 'none',
                    }

                },
            },
        },
        MuiList: {
            styleOverrides: {
                root: {
                    padding: 0,
                    marginRight: '-2rem',
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    gap: '0.5rem',
                    height: '2rem',
                    backgroundColor: `${lightBlue}`,
                    fontSize: '0.7rem',
                    letterSpacing: '2px',
                    color: 'white',
                    transition: 'all .2s ease',
                    [bk.breakpoints.down('xs')]: {
                        height: '1rem',
                        marginLeft: '-0.3rem',
                    },
                    [bk.breakpoints.down('sm')]: {
                        height: '1rem',
                        marginLeft: '-0.2.5rem',
                    },
                    [bk.breakpoints.down('sm')]: {
                        height: '1rem',
                    },
                    '&:hover': {
                        border: 'none',
                    },
                    'div': {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '0.3rem',
                        marginLeft: '-0.2rem',
                        transition: 'all .2s ease',
                        [bk.breakpoints.down('xs')]: {
                            height: '0.2rem',
                            width: '3rem',
                            marginRight: '-2rem',
                        },
                        [bk.breakpoints.down('sm')]: {
                            height: '1.8rem',
                            width: '1rem',
                            marginLeft: '-0.2.5rem',
                        },
                        'img': {
                            [bk.breakpoints.down('md')]: {
                                width: '18px',
                            },
                        }
                    },
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    filter: 'invert(100%)',
                    [bk.breakpoints.down('sm')]: {
                        display: 'none',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: `${lightBlue}`,
                    borderRadius: '25px',
                    [bk.breakpoints.down('sm')]: {
                        borderRadius: '15px',
                    },
                    'div': {
                        alignItems: 'center',
                    },
                },
            },
        },
        MuiModal: {
            styleOverrides: {
                root: {
                    'h3': {
                        textAlign: 'center',
                    }
                },
            }
        }
    },
    typography: {
        'fontFamily': `GilroyRegular, sans-serif`,
        'fontWeightLight': 700,
        'fontWeightRegular': 700,
        'fontWeightBold': 700,
    },

});
