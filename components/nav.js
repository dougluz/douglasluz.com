import NextLink from "next/link"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { Box, Container, Flex, Stack, Text } from "@chakra-ui/layout"
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

export const Nav = (props) => {
  const { path } = props

  return (
    <Box
      position="fixed"
      width="100%"
      bg={useColorModeValue("#d4cbc140", "#09090a80")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Box mr={2} display={{ base: "inline-block", md: "none" }}>
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
        </Box>
        <Flex align="center">
          <NextLink href="/">
            <Text
              style={{ cursor: "pointer" }}
              mr={8}
              fontSize="lg"
              fontWeight="bold"
            >
              Douglas
            </Text>
          </NextLink>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          spacing={2}
        >
          <LinkItem path={path} href="/works">
            Works
          </LinkItem>
          <LinkItem path={path} href="/contact">
            Contact
          </LinkItem>
        </Stack>
        <Box align="right" flex={1}>
          <ThemeButton />
        </Box>
      </Container>
    </Box>
  )
}
