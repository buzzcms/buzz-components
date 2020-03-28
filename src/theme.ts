import { Theme } from '@theme-ui/css'

import { Square, SquareCheck, SquareMinus } from './icons'

export const colors = {
  text: '#333',
  background: '#fefeff',

  primary: 'hsl(208,80%,40%, 1)',
  primary_disabled: 'hsl(208, 10%, 50%, 1)',
  primary_focus: 'hsl(208, 80%, 25%, 1)',
  primary_active: 'hsl(208, 80%, 15%, 1)',
  primary_outline: 'hsl(208, 31%, 50%, 0.2)',

  secondary: 'hsl(20, 80%, 40%, 1)',
  secondary_disabled: 'hsl(20, 10%, 50%, 1)',
  secondary_focus: 'hsl(20, 80%, 25%, 1)',
  secondary_active: 'hsl(20, 80%, 15%, 1)',
  secondary_outline: 'hsl(20, 80%, 15%, 0.2)',

  neutral: 'hsl(0, 0%, 40%, 1)',
  neutral_disabled: 'hsl(0, 0%, 60%, 1)',
  neutral_focus: 'hsl(0, 0%, 30%, 1)',
  neutral_active: 'hsl(0, 0%, 15%, 1)',
  neutral_outline: 'hsl(0, 0%, 15%, 0.2)',
}

const icons: { [key: string]: React.SFC } = {
  'square-check': SquareCheck,
  'square-minus': SquareMinus,
  square: Square,
}

export interface BuzzTheme extends Theme {
  icons: { [key: string]: React.SFC }
}

export const theme: BuzzTheme = {
  icons,
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
    '2xs': '0.5rem',
    xs: '0.725rem',
    s: '0.875rem',
    m: '1rem',
    l: '1.25rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '3rem',
    '4xl': '4rem',
  },
  colors,
  buttons: {
    variants: {
      fill: {
        cursor: 'pointer',
        color: 'background',
        border: 'light',
        borderColor: '__color',
        bg: '__color',
        '&:hover,&:focus': {
          bg: '__color_focus',
          border: 'light',
          borderColor: '__color_focus',
        },
        // FIXME: Should move data-selected to another block. Currently, it only used in MenuItem
        '&:active,&[data-selected]': {
          bg: '__color_active',
          borderColor: '__color_active',
        },
        '&:disabled': {
          bg: '__color_disabled',
          borderColor: '__color_disabled',
          cursor: 'not-allowed',
        },
      },
      outline: {
        border: 'light',
        borderColor: '__color',
        color: '__color',
        cursor: 'pointer',
        bg: 'background',
        '&:hover,&:focus': {
          color: '__color_focus',
          borderColor: '__color_focus',
        },
        '&:active,&[data-selected]': {
          color: '__color_active',
          borderColor: '__color_active',
        },
        '&:disabled': {
          color: '__color_disabled',
          borderColor: '__color_disabled',
          cursor: 'not-allowed',
        },
      },
      minimal: {
        border: 'transparent',
        color: '__color',
        cursor: 'pointer',
        bg: 'background',
        '&:hover,&:focus': {
          color: '__color_focus',
        },
        '&:active,&[data-selected]': {
          color: '__color_active',
        },
        '&:disabled': {
          color: '__color_disabled',
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
