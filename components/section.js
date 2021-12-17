import { Box } from "@chakra-ui/layout"
import { motion } from "framer-motion"

const MotionBox = motion(Box)

export const Section = ({ children, delay }) => (
  <MotionBox
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    mb={6}
  >
    {children}
  </MotionBox>
)
