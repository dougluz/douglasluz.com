import NextLink from "next/link"
import { Box, Flex, Stack, Text } from "@chakra-ui/layout"
import { LinkItem } from "./linkItem"
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Link
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import { ThemeButton } from "./themeButton"

export const Nav = ({ path }) => {
  return (
    <div className="fixed w-full flex justify-center bg-yellow-50 z-10">
      <div className="flex w-full p-2 max-w-3xl flex-wrap items-center justify-between">
        <div className="mr-2 inline-block md:invisible md:mr-0 md:w-0">
          <Menu isLazy id="navbar-menu">
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              aria-label="Options"
            />
            <MenuList>
              <NextLink href="/" legacyBehavior>
                <MenuItem as={Link}>Home</MenuItem>
              </NextLink>
              <NextLink href="/works" legacyBehavior>
                <MenuItem as={Link}>Works</MenuItem>
              </NextLink>
              <NextLink href="/contact" legacyBehavior>
                <MenuItem as={Link}>Contact</MenuItem>
              </NextLink>
            </MenuList>
          </Menu>
        </div>
        <div className="flex align-center">
          <NextLink href="/">
            <p className="cursor-pointer mr-8 text-lg font-bold">Douglas</p>
          </NextLink>
        </div>

        <div className="hidden flex-row items-center gap-4 md:inline-block">
          <LinkItem path={path} href="/works">
            Works
          </LinkItem>
          <LinkItem path={path} href="/contact">
            Contact
          </LinkItem>
        </div>
        <div className="flex flex-1 left-0 justify-end">
          <ThemeButton />
        </div>
      </div>
    </div>
  )
}
