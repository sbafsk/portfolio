import React from 'react';
import {
  Flex,
  IconButton,
  Box,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi';

import NavItems from './NavItems';

const Header = ({ onOpen }) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FiMoon, FiSun);

  return (
    <Box
      width="100vw"
      zIndex="banner"
      borderBottom="1px"
      borderBottomColor="orange"
      bg={useColorModeValue('gray.200', 'gray.900')}
      position="fixed"
    >
      <Flex mx="5vw" align="center" justify="space-between" height="60px">
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          variant="outline"
          onClick={onOpen}
          aria-label="open menu"
          icon={<FiMenu />}
        />

        <Text fontSize="2xl" fontWeight={600}>
          Seba
        </Text>

        <Flex alignItems="center">
          <NavItems
            display={{ base: 'none', md: 'flex' }}
            w={{ md: 'auto' }}
            direction="row"
            height="auto"
            spacing={{ base: '0', md: '6' }}
          />
          <IconButton
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            color="current"
            onClick={toggleColorMode}
            icon={<SwitchIcon />}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
