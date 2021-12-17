import { Box, Container } from "@chakra-ui/layout"
import Head from "next/head"
import { Nav } from "../nav"

export const Main = ({ children, router }) => (
  <Box as="main">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Douglas Luz homepage" />
      <meta name="author" content="Douglas Luz" />
      <meta name="author" content="dougluz" />
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@douguiluz" />
      <meta name="twitter:creator" content="@douguiluz" />
      <meta property="og:site_name" content="Douglas Luz Homepage" />
      <meta property="og:type" content="website" />
      <title>Douglas Luz - Homepage</title>
    </Head>
    <Nav path={router.asPath} />
    <Container maxW="container.md" pt={20}>
      {children}
    </Container>
  </Box>
)
