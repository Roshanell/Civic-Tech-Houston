import * as React from "react";

// 1. import `ChakraProvider` component
import {
  ChakraProvider,
  Code,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Stack,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Box m={100}>
        <FormControl>
          <FormLabel>Enter Your Zip Code</FormLabel>
          <Input type="email" />
          <FormHelperText>
            We'll never share your personal information.
          </FormHelperText>
        </FormControl>
        <Stack spacing={3} m={50}>
          <Text fontSize="4xl"> Civic Information </Text>
          <Text fontSize="3xl">Name: Midtown Super Neighborhood #62</Text>
          <Text fontSize="3xl">Times: 6:30 PM to 8:00 PM </Text>
          <Text fontSize="3xl">Dates: Second Thursday of the month</Text>
          <Text fontSize="3xl">Location: 3001 Main St, Houston, TX 77004</Text>
        </Stack>
        <Button colorScheme="blue" spacing={3} ml={52}>
          Report a Problem
        </Button>
      </Box>
    </ChakraProvider>
  );
}
export default App;
