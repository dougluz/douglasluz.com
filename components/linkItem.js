import NextLink from "next/link"
import clsx from "clsx"

export const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  return (
    <NextLink href={href} passHref legacyBehavior>
      <a
        className={clsx("p-2 rounded-md", active && "bg-gray-300 underline")}
        target={_target}
      >
        {children}
      </a>
    </NextLink>
  )
}
