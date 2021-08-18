import { useState, useEffect } from 'react';
import { Flex, Box, useDisclosure } from '@chakra-ui/react';

import Header from '../Navigation/Header';
import Sidebar from '../Navigation/Sidebar';
import ResponseModal from '../Modals/ResponseModal';

function Layout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    setModalData({
      title: 'Info',
      message: 'Site in construction',
      type: 'info',
    });
  }, []);

  return (
    <Box transition="2s ease">
      <ResponseModal
        data={modalData}
        isOpen={!!modalData}
        onClose={() => setModalData(null)}
      />
      <Sidebar isOpen={isOpen} onClose={onClose} />
      <Header onOpen={onOpen} />
      <Flex pt={{ base: 24, md: 28 }} justify="center">
        {children}
      </Flex>
    </Box>
  );
}

export default Layout;
