import {
  Box,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  HStack
} from "@chakra-ui/layout"
import { Image, Tooltip } from "@chakra-ui/react"

export const Work = ({ company, position, date, technologies, activities }) => (
  <Box pt={2} pb={2}>
    <Heading as="h4" fontSize={18} variant="section-title">
      {company}
    </Heading>
    <Text size="md" fontWeight="bold" pb={2} pt={2}>
      {position}
    </Text>
    <Text size="md" pb={2}>
      {date}
    </Text>
    <UnorderedList spacing={2}>
      {activities.map((activity) => (
        <ListItem key={activity}>{activity}</ListItem>
      ))}
    </UnorderedList>
    <Box
      display="flex"
      flexWrap="wrap"
      flexDirection={["column", "row"]}
      justifyContent="flex-start"
      mt={2}
    >
      <Text size="md" fontWeight="bold" mr={4} mb={[4, 0]}>
        Technologies:
      </Text>
      <HStack spacing={4}>
        {technologies.map((technology) => (
          <Tooltip label={technology} key={technology}>
            <Image
              loading="lazy"
              placeholder="blur"
              src={`images/${technology.toLowerCase()}.svg`}
              alt={`${technology} logo`}
              h={6}
              w={6}
            />
          </Tooltip>
        ))}
      </HStack>
    </Box>
  </Box>
)
