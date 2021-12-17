import { Image } from "@chakra-ui/image"
import { Heading, Text, VStack } from "@chakra-ui/layout"
import { Bio } from "../components/bio"
import { Projects } from "../components/projects"
import { Section } from "../components/section"

export default function Home() {
  return (
    <>
      <VStack>
        <Image
          borderRadius="full"
          borderColor="whiteAplha.800"
          borderWidth={4}
          borderStyle="solid"
          src="/images/douglas.webp"
          alt="Profile photo"
          w={150}
          h={150}
          loading="lazy"
          placeholder="blur"
        />
        <Heading as="h1" size="2xl" variant="page-title">
          Douglas Luz
        </Heading>
        <Text align="center">
          Full Stack Developer Based in Rio Negro, PR - Brazil
        </Text>
      </VStack>
      <Section>
        <Heading as="h2" variant="section-title">
          About
        </Heading>
        <Text align="justify" size="md">
          A full-stack developer that works with IT since 2015. Currently, I
          focus my studies on front-end technologies like React, Next, and
          Styled Components. My favorite language is Javascript. When I am not
          at work I like to read about technologies, photography and watch F1.
        </Text>
      </Section>
      <Bio />
      <Projects />
    </>
  )
}
