import React from 'react';
import { Box, Drawer, DrawerContent } from '@chakra-ui/react';

import NavItems from './NavItems';

function Sidebar({ isOpen, onClose }) {
  return (
    <Box>
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
      >
        <DrawerContent>
          <NavItems
            w={{ base: '100%' }}
            pos="fixed"
            height="auto"
            onClose={onClose}
          />
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
