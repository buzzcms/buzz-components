/** @jsx jsx */

import {
  MenuButton as ReachMenuButton,
  MenuButtonProps as ReachMenuButtonProps,
} from '@reach/menu-button'
import { jsx, SxStyleProp, useThemeUI } from '@theme-ui/core'
import dotProp from 'dot-prop'
import mapObject from 'map-obj'
import { forwardRef } from 'react'

import { defaultButtonSx } from './Button'

export interface ButtonProps extends ReachMenuButtonProps {
  variant?: string
  size?: 's' | 'm' | 'l'
  color?: string
}

const colorKey = '__color'

export const MenuButton = forwardRef(
  (
    { variant = 'fill', size = 'm', color = 'primary', ...props }: ButtonProps,
    ref: React.Ref<any>,
  ) => {
    const { theme } = useThemeUI()
    const variantSx: SxStyleProp = mapObject(
      dotProp.get(theme || {}, `buttons.variants.${variant}`, {}),
      (key: string, value: string) => [
        key?.toString(),
        ['bg', 'color', 'borderColor'].includes(key)
          ? value?.replace(colorKey, color)
          : value,
      ],
      { deep: true },
    )
    const sizeSx = dotProp.get(theme || {}, `buttons.sizes.${size}`, {})
    return (
      <ReachMenuButton
        {...props}
        ref={ref}
        sx={{
          ...defaultButtonSx,
          ...variantSx,
          ...sizeSx,
        }}
      />
    )
  },
)
