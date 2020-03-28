/** @jsx jsx */

import { MixedCheckboxProps, useMixedCheckbox } from '@reach/checkbox'
import { MixedOrBool } from '@reach/checkbox/dist/mixed'
import { jsx, useThemeUI } from '@theme-ui/core'
import dotProp from 'dot-prop'
import React, { forwardRef, useRef } from 'react'

import { Icon, SvgProps } from './Icon'

export interface CheckboxIconProps extends SvgProps {
  checked: MixedOrBool
}

const CheckboxIcon = ({ checked, ...props }: CheckboxIconProps) => (
  <React.Fragment>
    {checked === 'mixed' && <Icon icon="square-minus" {...props} />}
    {checked === true && <Icon icon="square-check" {...props} />}
    {checked === false && <Icon icon="square" {...props} />}
  </React.Fragment>
)

export interface CheckboxProps extends Omit<MixedCheckboxProps, 'size'> {
  size?: 's' | 'm' | 'l'
  color?: string
}

export const Checkbox = forwardRef(
  (
    {
      className,
      checked,
      onChange,
      children,
      size,
      color = 'primary',
      ...props
    }: CheckboxProps,
    ref: React.Ref<any>,
  ) => {
    const inputRef = useRef(null)
    const [inputProps, state] = useMixedCheckbox(inputRef, {
      defaultChecked: undefined,
      checked,
      onChange,
    })
    const { theme } = useThemeUI()
    const sizeSx = dotProp.get(theme || {}, `buttons.sizes.${size}`, {})
    return (
      <label
        className={className}
        ref={ref}
        sx={{ display: 'flex', alignItems: 'center', color: color }}
      >
        <CheckboxIcon
          aria-hidden="true"
          checked={state.checked}
          sx={{ mr: 2 }}
          size={24}
        />
        <input
          ref={inputRef}
          {...inputProps}
          {...props}
          sx={{
            position: 'absolute',
            opacity: 0,
            zIndex: -1,
            width: 1,
            height: 1,
            overflow: 'hidden',
            color,
            ...sizeSx,
          }}
        />
        {children}
      </label>
    )
  },
)
