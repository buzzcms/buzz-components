/** @jsx jsx */

import { MixedOrBool } from '@reach/checkbox/dist/mixed'
import { jsx, ThemeProvider } from '@theme-ui/core'
import { useState } from 'react'
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdIndeterminateCheckBox,
} from 'react-icons/md'

import { Button } from '~/Button'
import { Checkbox } from '~/Checkbox'
import { theme } from '~/theme'

export default {
  title: 'Checkbox',
}

const values: MixedOrBool[] = ['mixed', false, true]
const colors = ['primary', 'secondary']

export function Default() {
  const [state, setState] = useState<MixedOrBool>('mixed')
  return (
    <ThemeProvider theme={theme}>
      <div sx={{ p: 3 }}>
        <h2>Changed</h2>
        <Checkbox
          checked={state}
          onChange={e => {
            setState(e.target.checked)
          }}
        >
          Change me
        </Checkbox>
        <Button
          variant="outline"
          sx={{ mt: 2 }}
          size="s"
          onClick={() => setState('mixed')}
        >
          Make mixed
        </Button>
        <h2>Not changed</h2>
        <Checkbox checked>Checked</Checkbox>
        <Checkbox checked={false}>Unchecked</Checkbox>
        <Checkbox checked="mixed">Mixed</Checkbox>
      </div>
    </ThemeProvider>
  )
}

export function WithColors() {
  return (
    <ThemeProvider theme={theme}>
      {colors.map(color => (
        <div key={color}>
          <h2 sx={{ color }}>{color}</h2>
          {values.map(checked => {
            const label =
              checked === 'mixed'
                ? 'Mixed'
                : checked === true
                ? 'Checked'
                : 'Unchecked'
            return (
              <Checkbox key={label} color={color} checked={checked}>
                {label}
              </Checkbox>
            )
          })}
        </div>
      ))}
    </ThemeProvider>
  )
}

const icons: { [key: string]: React.SFC } = {
  'square-check': MdCheckBox,
  'square-minus': MdIndeterminateCheckBox,
  square: MdCheckBoxOutlineBlank,
}

export function WithCustomIcons() {
  return (
    <ThemeProvider theme={{ ...theme, icons } as any}>
      {colors.map(color => (
        <div key={color}>
          <h2 sx={{ color }}>{color}</h2>
          <Checkbox color={color}>Check me</Checkbox>
          {values.map(checked => {
            const label =
              checked === 'mixed'
                ? 'Mixed'
                : checked === true
                ? 'Checked'
                : 'Unchecked'
            return (
              <Checkbox key={label} color={color} checked={checked}>
                {label}
              </Checkbox>
            )
          })}
        </div>
      ))}
    </ThemeProvider>
  )
}
