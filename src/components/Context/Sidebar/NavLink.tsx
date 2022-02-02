import { Icon, Text, Box } from '@chakra-ui/react';
import { useSidebarDrawer } from 'context/SidebarDrawerContext';
import { ElementType } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'store/auth/auth.ducks';
import { ActiveLink } from './ActiveLink';

interface NavLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href }: NavLinkProps) {
  const { onClose } = useSidebarDrawer();
  const dispatch = useDispatch();
  function ClosedFunction(url: string) {
    onClose();
    if (url === '/login') {
      dispatch(logout());
    }
  }
  return (
    <ActiveLink to={href} onClick={() => ClosedFunction(href)}>
      <Box display="flex" align="center">
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </Box>
    </ActiveLink>
  );
}
