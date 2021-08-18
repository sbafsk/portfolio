import { Link, Flex, Icon, useColorModeValue } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';

const NavItem = ({ icon, children, href, ...rest }) => {
  return (
    <Link
      to={href}
      as={RouteLink}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        justify="flex-end"
        p="4"
        role="group"
        _hover={{
          bg: useColorModeValue('gray.300', 'gray.600'),
          color: useColorModeValue('gray.600', 'gray.300'),
        }}
        {...rest}
      >
        {children}
        {icon && (
          <Icon
            ml="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
      </Flex>
    </Link>
  );
};

export default NavItem;
