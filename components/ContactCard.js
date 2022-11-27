import { Box, useColorModeValue } from "@chakra-ui/react"

export const ContactCard = ({ children }) => {
  const borderColor = useColorModeValue("gray.400", "#555558")
  return (
    <Box p={2} borderRadius={10} border="1px solid" borderColor={borderColor}>
      {children}
    </Box>
  )
}
