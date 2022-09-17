import * as React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider, Code, FormControl, FormLabel, Input, FormHelperText,} from "@chakra-ui/react";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <FormControl>
        <FormLabel>Enter Your Zip Code</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your personal information.</FormHelperText>
      </FormControl>
    </ChakraProvider>
  );
}
export default App;
