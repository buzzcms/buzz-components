import { Theme } from '@theme-ui/css'

export const colors: any = {
  text: '#333',
  background: '#fefeff',
  primary: {
    default: 'hsl(208,80%,40%, 1)',
    disabled: 'hsl(208, 31%, 50%, 1)',
    focus: 'hsl(208, 80%, 25%, 1)',
    active: 'hsl(208, 80%, 15%, 1)',
  },
  secondary: {
    default: 'hsl(20, 80%, 40%, 1)',
    disabled: 'hsl(20, 31%, 50%, 1)',
    focus: 'hsl(20, 80%, 25%, 1)',
    active: 'hsl(20, 80%, 15%, 1)',
  },
  neutral: {
    default: 'hsl(0, 0%, 40%, 1)',
    disabled: 'hsl(0, 0%, 60%, 1)',
    focus: 'hsl(0,0%,30%,1)',
    active: 'hsl(0,0%,15%,1)',
  },
}

export const theme: Theme = {
  fonts: {
    body: 'Open Sans, sans-serif',
    raised: 'Oswald, sans-serif;',
  },
  fontWeights: {
    light: 300,
    regular: 400,
    semiBold: 600,
    bold: 700,
  },
  sizes: {
    4: '24rem',
    5: '32rem',
    6: '56rem',
    7: '64rem',
    8: '72rem',
    9: '80rem',
  },
  borders: {
    light: '1px solid',
    transparent: '1px solid transparent',
  },
  fontSizes: {
    xxs: '0.5rem',
    xs: '0.725rem',
    s: '0.875rem',
    m: '1rem',
    l: '1.25rem',
    xl: '1.5rem',
    xxl: '2rem',
    xxxl: '3rem',
    xxxxl: '4rem',
  },
  colors,
  buttons: {
    variants: {
      fill: {
        cursor: 'pointer',
        color: 'background',
        border: 'light',
        borderColor: '__color.default',
        bg: '__color.default',
        '&:hover,&:focus': {
          bg: '__color.focus',
          border: 'light',
          borderColor: '__color.focus',
        },
        '&:active': {
          bg: '__color.active',
          borderColor: '__color.active',
        },
        '&:disabled': {
          bg: '__color.disabled',
          borderColor: '__color.disabled',
          cursor: 'not-allowed',
        },
      },
      outline: {
        border: 'light',
        borderColor: '__color.default',
        color: '__color.default',
        cursor: 'pointer',
        bg: 'background',
        '&:hover,&:focus': {
          color: '__color.focus',
          borderColor: '__color.focus',
        },
        '&:active': {
          color: '__color.active',
          borderColor: '__color.active',
        },
        '&:disabled': {
          color: '__color.disabled',
          borderColor: '__color.disabled',
          cursor: 'not-allowed',
        },
      },
      minimal: {
        border: 'transparent',
        color: '__color.default',
        cursor: 'pointer',
        bg: 'background',
        '&:hover,&:focus': {
          color: '__color.focus',
        },
        '&:active': {
          color: '__color.active',
        },
        '&:disabled': {
          color: '__color.disabled',
          cursor: 'not-allowed',
        },
      },
    },
    sizes: {
      s: {
        fontSize: 's',
        px: 2,
        py: 1,
      },
      m: {
        fontSize: 'm',
        px: 3,
        py: 2,
      },
      l: {
        fontSize: 'xl',
        px: 3,
        py: 2,
      },
    },
  },
}
