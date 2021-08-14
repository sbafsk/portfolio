import React from 'react';
import { ChakraProvider, Box, Text, theme, Grid } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="60vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />

          <Text>Sebastian Pereira's portfolio coming soon...</Text>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
