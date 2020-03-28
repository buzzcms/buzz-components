import { useThemeUI } from '@theme-ui/core'
import dotProp from 'dot-prop'
import React, { SFC } from 'react'

type HtmlSvgProps = JSX.IntrinsicElements['svg']

export interface SvgProps extends HtmlSvgProps {
  size?: number
}

export interface IconProps extends SvgProps {
  icon: string
}

export function Icon({ icon, ...rest }: IconProps) {
  const { theme } = useThemeUI()
  const Component: SFC | undefined = dotProp.get(theme || {}, `icons.${icon}`)

  if (!Component) {
    return null
  }
  return <Component {...rest} />
}
