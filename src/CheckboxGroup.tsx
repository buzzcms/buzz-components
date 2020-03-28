/** @jsx jsx */

import { jsx } from '@theme-ui/core'

import { Checkbox } from './Checkbox'

type HtmlDivProps = JSX.IntrinsicElements['div']

export interface CheckboxGroupProps<T> extends Omit<HtmlDivProps, 'onChange'> {
  options: readonly { label: string; value: T }[]
  value: T[]
  onChange: (value: T[]) => void
}

export function CheckboxGroup<T>({
  options,
  value,
  onChange,
  ...rest
}: CheckboxGroupProps<T>) {
  return (
    <div sx={{ display: 'flex', flexWrap: 'wrap' }} {...rest}>
      {options.map((x, idx) => {
        const isChecked = value.includes(x.value)
        return (
          <Checkbox
            key={idx}
            checked={isChecked}
            onChange={() => {
              if (isChecked) {
                onChange(value.filter(v => v !== x.value))
              } else {
                onChange([...value, x.value])
              }
            }}
          >
            {x.label}
          </Checkbox>
        )
      })}
    </div>
  )
}
