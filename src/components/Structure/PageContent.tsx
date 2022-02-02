import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface PageContentProps {
  children: ReactNode;
}
export function PageContent({ children }: PageContentProps) {
  return (
    <Box
      flex="1"
      borderRadius={8}
      bg="white"
      p={['4', '8']}
      boxShadow="xl"
      pb="4"
    >
      {children}
    </Box>
  );
}
