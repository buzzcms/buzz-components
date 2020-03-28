/** @jsx jsx */

import { jsx, SxStyleProp, useThemeUI } from '@theme-ui/core'
import dotProp from 'dot-prop'
import mapObject from 'map-obj'
import { forwardRef } from 'react'

type HtmlButtonProps = JSX.IntrinsicElements['button']

export interface ButtonProps extends HtmlButtonProps {
  variant?: string
  size?: 's' | 'm' | 'l'
  color?: string
}

const colorKey = '__color'

export const Button = forwardRef(
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
      <button
        {...props}
        ref={ref}
        sx={{
          appearance: 'none',
          display: 'inline-block',
          textAlign: 'center',
          lineHeight: 'inherit',
          textDecoration: 'none',
          fontSize: 'inherit',
          border: 0,
          borderRadius: 4,
          ...variantSx,
          ...sizeSx,
        }}
      />
    )
  },
)
