/** @jsx jsx */

import { jsx, ThemeProvider } from '@theme-ui/core'

import { Button } from '~/Button'
import { theme } from '~/theme'

const colors = ['primary', 'secondary', 'neutral']
const variants = ['fill', 'outline', 'minimal']

export default {
  title: 'Button',
}

export function Default() {
  return (
    <ThemeProvider theme={theme}>
      <div sx={{ p: 3 }}>
        {colors.map(color => (
          <div key={color}>
            <h2 sx={{ textTransform: 'uppercase', color }}>{color}</h2>
            {variants.map(variant => (
              <div key={variant} sx={{ my: 2 }}>
                <Button color={color} variant={variant} size="l">
                  {color} {variant}
                </Button>
                <Button color={color} variant={variant} size="m" sx={{ ml: 2 }}>
                  {color} {variant}
                </Button>
                <Button color={color} variant={variant} size="s" sx={{ ml: 2 }}>
                  {color} {variant}
                </Button>
                <Button
                  color={color}
                  variant={variant}
                  size="s"
                  disabled
                  sx={{ ml: 2 }}
                >
                  {color} {variant} disabled
                </Button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </ThemeProvider>
  )
}
