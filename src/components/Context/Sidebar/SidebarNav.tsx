import { Stack } from '@chakra-ui/react';
import {
  RiDashboardLine,
  RiContactsLine,
  RiLogoutBoxLine,
} from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/dashboard">
          Dashboard
        </NavLink>
        <NavLink icon={RiContactsLine} href="/users">
          Usuários
        </NavLink>
      </NavSection>
      <NavSection title="PERFIL">
        <NavLink icon={RiLogoutBoxLine} href="/login">
          Logout
        </NavLink>
      </NavSection>
    </Stack>
  );
}
