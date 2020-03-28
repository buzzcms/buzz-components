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
import { CheckboxGroup } from '~/CheckboxGroup'
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
        <div>
          <Button
            variant="outline"
            sx={{ mt: 2 }}
            size="s"
            onClick={() => setState('mixed')}
          >
            Make mixed
          </Button>
        </div>
        <h2>Not changed</h2>
        <Checkbox checked>Checked</Checkbox>
        <Checkbox sx={{ ml: 2 }} checked={false}>
          Unchecked
        </Checkbox>
        <Checkbox sx={{ ml: 2 }} checked="mixed">
          Mixed
        </Checkbox>
        <Checkbox sx={{ ml: 2 }} disabled>
          Disabled
        </Checkbox>
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
          <Checkbox color={color}>Change me</Checkbox>
          <Checkbox sx={{ ml: 3 }} disabled color={color}>
            Disabled
          </Checkbox>
          <h4>State</h4>
          <div>
            {values.map((checked, idx) => {
              const label =
                checked === 'mixed'
                  ? 'Mixed'
                  : checked === true
                  ? 'Checked'
                  : 'Unchecked'
              return (
                <Checkbox
                  sx={{ ml: idx > 0 ? 3 : 0 }}
                  key={label}
                  color={color}
                  checked={checked}
                >
                  {label}
                </Checkbox>
              )
            })}
          </div>
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
              <Checkbox
                sx={{ ml: 3 }}
                key={label}
                color={color}
                checked={checked}
              >
                {label}
              </Checkbox>
            )
          })}
        </div>
      ))}
    </ThemeProvider>
  )
}

const options = [
  {
    label: 'Option 1',
    value: 1,
  },
  {
    label: 'Option 2',
    value: 2,
  },
  {
    label: 'Option 3',
    value: 3,
  },
]

export function WithCheckboxGroup() {
  const [value, onChange] = useState<number[]>([1, 2])
  return (
    <ThemeProvider theme={theme}>
      <CheckboxGroup
        options={options}
        value={value}
        onChange={onChange}
        sx={{
          'label:not(:first-child)': {
            ml: 3,
          },
        }}
      />
      <div sx={{ mt: 3 }}>You select: {value.join(', ')}</div>
    </ThemeProvider>
  )
}
