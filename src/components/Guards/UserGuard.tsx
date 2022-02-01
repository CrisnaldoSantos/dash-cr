import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { getUserData } from 'utils/dataStorage';

interface UserGuardsProps {
  children: ReactNode;
  userId: number;
}

export function UserGuards({ children, userId }: UserGuardsProps) {
  const userData = getUserData();

  if (Number(userData.code) === userId) {
    return <></>;
  }
  return <Box>{children}</Box>;
}
