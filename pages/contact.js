import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useColorModeValue,
  useToast,
  Link,
  HStack
} from "@chakra-ui/react"
import axios from "axios"
import { useForm } from "react-hook-form"
import { IconContext } from "react-icons"
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io"
import { FiMail } from "react-icons/fi"
import { Section } from "../components/section"
import { ContactCard } from "../components/ContactCard"

const Contact = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting }
  } = useForm()
  const toast = useToast()
  const iconColor = useColorModeValue("black", "purple")

  const onSubmit = async (values) => {
    try {
      const { data } = await axios.post("api/email", values)
      toast({
        title: data.message,
        status: "success",
        duration: 3000,
        isClosable: true
      })
      reset()
    } catch (error) {
      toast({
        title: error.response?.data?.message || "Ops, something went wrong.",
        status: "error",
        duration: 3000,
        isClosable: true
      })
    }
  }

  return (
    <Section>
      <Heading
        as="h1"
        size="2xl"
        variant="page-title"
        textAlign="center"
        mb={10}
      >
        Contact
      </Heading>
      <HStack
        spacing={2}
        align="center"
        mb={4}
        width="full"
        justifyContent="center"
      >
        <IconContext.Provider value={{ color: iconColor, size: 50 }}>
          <ContactCard label="LinkedIn">
            <Link href="https://www.linkedin.com/in/douguiluz/" isExternal>
              <IoLogoLinkedin />
            </Link>
          </ContactCard>
          <ContactCard>
            <Link href="https://www.github.com/dougluz/" isExternal>
              <IoLogoGithub />
            </Link>
          </ContactCard>
          <ContactCard>
            <Link href="mailto:hi@douglasluz.com" isExternal>
              <FiMail />
            </Link>
          </ContactCard>
        </IconContext.Provider>
      </HStack>
      <Heading as="h2" variant="section-title">
        Or send me a message
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.email} isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="email"
            id="email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
          />
        </FormControl>
        <FormControl isInvalid={errors.name} isRequired mt={5}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            type="text"
            id="name"
            {...register("name", {
              required: "This field is required"
            })}
          />
        </FormControl>
        <FormControl isInvalid={errors.message} isRequired mt={5}>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea
            id="message"
            size="md"
            {...register("message", {
              required: "This field is required"
            })}
          />
        </FormControl>
        <Box display="flex" justifyContent="flex-end">
          <Button
            type="submit"
            colorScheme={useColorModeValue("facebook", "purple")}
            mt={4}
            isLoading={isSubmitting}
          >
            Send
          </Button>
        </Box>
      </form>
    </Section>
  )
}

export default Contact
