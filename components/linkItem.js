import { Link, useColorModeValue } from "@chakra-ui/react"
import NextLink from "next/link"

export const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue("black", "whiteAlpha.900")
  const activeBackgroundColor = useColorModeValue("gray.400", "purple")
  const activeColor = useColorModeValue("#000", "#fff")
  return (
    <NextLink href={href} passHref legacyBehavior>
      <Link
        p={2}
        bg={active ? activeBackgroundColor : undefined}
        color={active ? activeColor : inactiveColor}
        _target={_target}
        borderRadius={10}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}
