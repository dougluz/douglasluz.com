import { ExternalLinkIcon } from "@chakra-ui/icons"
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
  VStack
} from "@chakra-ui/react"
import axios from "axios"
import { useForm } from "react-hook-form"
import { Section } from "../components/section"

const Contact = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting }
  } = useForm()
  const toast = useToast()

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
      <Heading as="h2" variant="section-title">
        My social networks and email
      </Heading>
      <VStack spacing={2} align="left" mb={4}>
        <Link href="https://www.linkedin.com/in/douguiluz/" isExternal>
          LinkedIn <ExternalLinkIcon mx="2px" />
        </Link>
        <Link href="https://www.github.com/dougluz/" isExternal>
          Github <ExternalLinkIcon mx="2px" />
        </Link>
        <Link href="mailto:hi@douglasluz.com" isExternal>
          Email <ExternalLinkIcon mx="2px" />
        </Link>
      </VStack>
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
