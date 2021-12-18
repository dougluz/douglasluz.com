import { Container, Flex, Text } from "@chakra-ui/react";

export const Footer = () => (
  <Container as="footer" maxW="container.md" css={{ bottom: 0 }}>
    <Flex alignItems="center" justifyContent="center">
      <Text mt={4} mb={4}>
        Develop with 💓 by Douglas Luz
      </Text>
    </Flex>
  </Container>
)
