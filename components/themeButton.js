import { MoonIcon } from "@chakra-ui/icons"
import { useColorMode, useColorModeValue } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"

export const ThemeButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={useColorModeValue("light", "dark")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <button
          className="p-4 rounded bg-blue-600 flex items-center justify-center"
          onClick={toggleColorMode}
        >
          <MoonIcon />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
