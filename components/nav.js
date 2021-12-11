import NextLink from 'next/link'
import { useColorModeValue } from "@chakra-ui/color-mode"
import { Box, Container, Flex, Stack, Text } from "@chakra-ui/layout"

export const Nav = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      width="100%"
      bg={useColorModeValue('#d4cbc140', '#09090a80')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={5}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex
          align="center"
        >
          <NextLink href="/" passHref>
            <Text mr={3} fontSize="lg" fontWeight="bold">Douglas</Text>
          </NextLink>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <NextLink href="/works" passHref>
            Works
          </NextLink>
          <NextLink href="/posts" passHref>
            Contact
          </NextLink>
        </Stack>
      </Container>
    </Box>
  )
}