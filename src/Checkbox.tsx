/** @jsx jsx */

import {
  CustomCheckboxContainer,
  CustomCheckboxInput,
  MixedCheckboxProps,
} from '@reach/checkbox'
import { MixedOrBool } from '@reach/checkbox/dist/mixed'
import { jsx, useThemeUI } from '@theme-ui/core'
import dotProp from 'dot-prop'
import React, { forwardRef } from 'react'

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
    const { theme } = useThemeUI()
    const sizeSx = dotProp.get(theme || {}, `buttons.sizes.${size}`, {})
    return (
      <CustomCheckboxContainer checked={checked} onChange={onChange} {...props}>
        {({ inputRef, checked, focused }) => (
          <label
            className={className}
            ref={ref}
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: props.disabled ? `${color}_disabled` : color,
              cursor: props.disabled ? 'not-allowed' : 'pointer',
              px: 2,
              py: 1,
              outline: focused ? '1px solid' : undefined,
              outlineColor: `${color}_outline`,
              '&:active': {
                outline: focused ? '1px solid' : undefined,
                outlineColor: `${color}_outline`,
              },
            }}
          >
            <CheckboxIcon
              aria-hidden="true"
              checked={checked}
              sx={{ mr: 2 }}
              size={24}
            />
            <CustomCheckboxInput
              ref={inputRef as any}
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
        )}
      </CustomCheckboxContainer>
    )
  },
)
