import React from 'react';
import { Box } from '@chakra-ui/react';
import { FiUser, FiHome, FiPhone, FiPaperclip } from 'react-icons/fi';
import NavItem from './NavItem';

export default function NavItems({ onClose, ...rest }) {
  const linkItems = [
    { name: 'Home', icon: FiHome, href: '/' },
    { name: 'My Profile', icon: FiUser, href: '/profile' },
    { name: 'My Apps', icon: FiPhone, href: '/projects' },
    { name: 'Contact', icon: FiPaperclip, href: '/contact' },
  ];

  return (
    <Box {...rest}>
      {linkItems.map((link) => (
        <NavItem
          key={link.name}
          //icon={{ base: link.icon, md: false }}
          href={link.href}
          fontSize={14}
          //onClick={{ base: onClose, md: () => {} }}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
}
