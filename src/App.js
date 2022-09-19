import * as React from "react";
import superNeighborhoods from "./data.json";

// 1. import `ChakraProvider` component
import {
  ChakraProvider,
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
  const [address, setAddress] = React.useState("");

  const [selectedSuperNeighborhood] = superNeighborhoods.filter(
    (superNeighborhood) => {
      return superNeighborhood.address === address;
    }
  );

  const handleChange = (event) => {
    setAddress(event.target.value);
  };

  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Box m={100}>
        <FormControl>
          <FormLabel>Enter Your Address</FormLabel>
          <Input value={address} onChange={handleChange} />
          <FormHelperText>
            We'll never share your personal information.
          </FormHelperText>
        </FormControl>
        {selectedSuperNeighborhood ? (
          <>
            <Stack spacing={3} m={50}>
              <Text fontSize="4xl"> Civic Information </Text>
              <Text fontSize="3xl">
                Name: {selectedSuperNeighborhood?.name}
              </Text>
              <Text fontSize="3xl">
                Status: {selectedSuperNeighborhood?.status}
              </Text>
              {selectedSuperNeighborhood?.contactAndMeetingInformation ? (
                <Text fontSize="3xl">
                  Dates:
                  {selectedSuperNeighborhood?.contactAndMeetingInformation}{" "}
                </Text>
              ) : null}
              <Text fontSize="3xl">
                Location: {selectedSuperNeighborhood?.location}
              </Text>
            </Stack>

            <Button colorScheme="blue" spacing={3} ml={52}>
              Report a Problem
            </Button>
          </>
        ) : null}
      </Box>
    </ChakraProvider>
  );
}
export default App;
