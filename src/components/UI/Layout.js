import { Flex, Box, useDisclosure } from '@chakra-ui/react';

import Header from '../Navigation/Header';
import Sidebar from '../Navigation/Sidebar';

function Layout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box transition="2s ease">
      <Sidebar isOpen={isOpen} onClose={onClose} />
      <Header onOpen={onOpen} />
      <Flex pt={{ base: 24, md: 28 }} justify="center">
        {children}
      </Flex>
    </Box>
  );
}

export default Layout;
