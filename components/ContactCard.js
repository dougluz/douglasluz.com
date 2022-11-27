import { Box } from "@chakra-ui/react"

export const ContactCard = ({ children }) => (
  <Box p={2} borderRadius={10} border="1px solid" borderColor="gray.400">
    {children}
  </Box>
)
