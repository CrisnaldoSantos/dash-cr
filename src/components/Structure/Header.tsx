import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { Logo } from 'components/Context/Header/Logo';
import { NotificationsNav } from 'components/Context/Header/NotificationsNav';
import { Profile } from 'components/Context/Header/Profile';
import { SearchBox } from 'components/Context/Header/SearchBox';
import { useSidebarDrawer } from 'context/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { onOpen } = useSidebarDrawer();

  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1280}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}
      <Logo />
      {isWideVersion && <SearchBox />}

      <Flex alignItems="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
