/** @jsx jsx */

import { MixedCheckboxProps } from '@reach/checkbox'
import { useMixedCheckbox } from '@reach/checkbox'
import { MixedOrBool } from '@reach/checkbox/dist/mixed'
import { jsx, useThemeUI } from '@theme-ui/core'
import dotProp from 'dot-prop'
import React, { forwardRef, useRef, useState } from 'react'

import { Icon, SvgProps } from './Icon'

export interface CheckboxIconProps extends SvgProps {
  checked: MixedOrBool
}

type LabelProps = JSX.IntrinsicElements['label']

const CheckboxIcon = ({ checked, ...props }: CheckboxIconProps) => (
  <React.Fragment>
    {checked === 'mixed' && <Icon icon="square-minus" {...props} />}
    {checked === true && <Icon icon="square-check" {...props} />}
    {checked === false && <Icon icon="square" {...props} />}
  </React.Fragment>
)

export interface CheckboxProps
  extends Pick<MixedCheckboxProps, 'checked' | 'onChange' | 'disabled'>,
    Omit<LabelProps, 'size' | 'onChange'> {
  size?: 's' | 'm' | 'l'
  color?: string
}

export const Checkbox = forwardRef(
  (
    {
      checked,
      onChange,
      children,
      size,
      color = 'primary',
      ...props
    }: CheckboxProps,
    ref: React.Ref<any>,
  ) => {
    const { theme } = useThemeUI()
    const [focused, setFocused] = useState(false)
    const sizeSx = dotProp.get(theme || {}, `buttons.sizes.${size}`, {})
    const inputRef = useRef(null)
    const [inputProps, stateData] = useMixedCheckbox(inputRef, {
      checked,
      onChange,
    })

    return (
      <label
        ref={ref}
        {...props}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          color: props.disabled ? `${color}_disabled` : color,
          cursor: props.disabled ? 'not-allowed' : 'pointer',
          py: 1,
          outline: focused ? '1px solid' : undefined,
          outlineColor: `${color}_outline`,
          '&:active': {
            outline: '1px solid',
            outlineColor: `${color}_outline`,
          },
        }}
      >
        <CheckboxIcon
          aria-hidden="true"
          checked={stateData.checked}
          sx={{ mr: 1 }}
          size={24}
        />
        <input
          {...inputProps}
          disabled={props.disabled}
          ref={inputRef}
          onFocus={() => {
            setFocused(true)
          }}
          onBlur={() => {
            setFocused(false)
          }}
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
