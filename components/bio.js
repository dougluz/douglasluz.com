import { Heading, HStack, Text } from "@chakra-ui/layout"
import { VStack } from "@chakra-ui/react"
import { Section } from "./section"

const bioInfo = [
  {
    date: "Oct 1997",
    description: "Born"
  },
  {
    date: "Jan 2015",
    description: "Joined Information Systems BA"
  },
  {
    date: "Jan 2015",
    description: "Started working at intern at Rio Negro city hall"
  },
  {
    date: "Sep 2015",
    description: "Working as intern on SESI"
  },
  {
    date: "Oct 2017",
    description: "Joined as intern in Tranorte Sistemas Mecanizados"
  },
  {
    date: "May 2018",
    description: "Promoted to IT Assistant at Tranorte Sistemas Mecanizados"
  },
  {
    date: "Feb 2018",
    description: "Graduated as Information Systems BA"
  },
  {
    date: "Nov 2020",
    description: "Joined ZRP as full-stack developer"
  }
]

export const Bio = () => (
  <Section>
    <Heading as="h2" variant="section-title">
      Bio
    </Heading>
    <VStack>
      {bioInfo.map(({ date, description }, index) => (
        <HStack key={index} justifyContent="flex-start" w="100%">
          <Text minW={["20%", "10%"]} fontWeight="bold">
            {date}
          </Text>
          <Text>{description}</Text>
        </HStack>
      ))}
    </VStack>
  </Section>
)
