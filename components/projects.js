import { Image } from "@chakra-ui/image"
import { Box, Heading, Link, SimpleGrid, Text, VStack } from "@chakra-ui/layout"
import { Section } from "./section"

export const Projects = () => (
  <Section>
    <Heading as="h2" variant="section-title">
      Projects that I worked on
    </Heading>
    <Box>
      <SimpleGrid columns={[1, 2]}>
        <VStack>
          <Link href="http://libercapital.com.br" isExternal>
            <Image
              src="images/liber.png"
              maxW={300}
              borderRadius={10}
              placeholder="blur"
              loading="lazy"
              alt="Liber page printscreen"
            />
          </Link>
          <Text fontWeight="bold">Liber Capital</Text>
          <Text>Front-end developer</Text>
        </VStack>
        <VStack>
          <Link href="http://frentecorretora.com.br" isExternal>
            <Image
              src="images/frente.png"
              maxW={300}
              borderRadius={10}
              placeholder="blur"
              loading="lazy"
              alt="Frente corretora page printscreen"
            />
          </Link>
          <Text fontWeight="bold">Frente Corretora</Text>
          <Text>Full-stack developer</Text>
        </VStack>
      </SimpleGrid>
    </Box>
  </Section>
)
