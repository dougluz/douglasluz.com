import { Link, useColorModeValue } from "@chakra-ui/react"
import NextLink from "next/link"

export const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900")
  const activeBackgroundColor = useColorModeValue("facebook", "purple")
  const activeColor = useColorModeValue("#000", "#fff")
  return (
    <NextLink href={href} passHref>
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
