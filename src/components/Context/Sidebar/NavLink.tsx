import { Icon, Text, Box } from '@chakra-ui/react';
import { useSidebarDrawer } from 'context/SidebarDrawerContext';
import { ElementType } from 'react';
import { ActiveLink } from './ActiveLink';

interface NavLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href }: NavLinkProps) {
  const { onClose } = useSidebarDrawer();
  return (
    <ActiveLink to={href} onClick={() => onClose()}>
      <Box display="flex" align="center">
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </Box>
    </ActiveLink>
  );
}
