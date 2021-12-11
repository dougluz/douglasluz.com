import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/layout";

export const Work = ({ company, position, technologies, activities }) => (
  <Box pt={2} pb={2}>
    <Heading as="h4" fontSize={18} variant="section-title">{company}</Heading>
    <Text size="md" pb={2} pt={2}>{position}</Text>
    <UnorderedList spacing={2}>
      {activities.map(activity => <ListItem key={activity}>{activity}</ListItem>)}
    </UnorderedList>
  </Box>
)
