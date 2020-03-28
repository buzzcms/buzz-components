/** @jsx jsx */

// import '@reach/menu-button/styles.css'

import { Menu, MenuItem, MenuList } from '@reach/menu-button'
import { jsx, ThemeProvider } from '@theme-ui/core'
import { MdArrowDropDown } from 'react-icons/md'

import { Button } from '~/Button'
import { MenuButton } from '~/MenuButton'
import { theme } from '~/theme'

export default {
  title: 'Menu',
}

export function Default() {
  return (
    <ThemeProvider theme={theme}>
      <Menu>
        <MenuButton variant="outline" size="s">
          Actions
          <span aria-hidden sx={{ display: 'contents' }}>
            <MdArrowDropDown />
          </span>
        </MenuButton>
        <MenuList>
          <MenuItem
            as={Button}
            size="s"
            variant="minimal"
            sx={{ width: '100%', textAlign: 'left' }}
            onSelect={() => alert('Download')}
          >
            Download
          </MenuItem>
          <MenuItem
            as={Button}
            size="s"
            variant="minimal"
            sx={{ width: '100%', textAlign: 'left' }}
            onSelect={() => alert('Copy')}
          >
            Create a Copy
          </MenuItem>
        </MenuList>
      </Menu>
    </ThemeProvider>
  )
}

export function Large() {
  return (
    <ThemeProvider theme={theme}>
      <Menu>
        <MenuButton variant="minimal" size="m">
          Actions
          <span aria-hidden sx={{ display: 'contents' }}>
            <MdArrowDropDown />
          </span>
        </MenuButton>
        <MenuList>
          <MenuItem
            as={Button}
            size="m"
            variant="minimal"
            sx={{
              width: '100%',
              textAlign: 'left',
            }}
            onSelect={() => alert('Download')}
          >
            Download
          </MenuItem>
          <MenuItem
            as={Button}
            size="m"
            variant="minimal"
            sx={{ width: '100%', textAlign: 'left' }}
            onSelect={() => alert('Copy')}
          >
            Create a Copy
          </MenuItem>
        </MenuList>
      </Menu>
    </ThemeProvider>
  )
}
