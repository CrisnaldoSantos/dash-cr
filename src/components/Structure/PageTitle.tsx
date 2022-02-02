import { Heading, HeadingProps as ChakraHeadingProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface HeadingProps extends ChakraHeadingProps {
  children: ReactNode;
}
export function PageTitle({ children, ...rest }: HeadingProps) {
  return (
    <Heading size="lg" fontWeight="Bold" {...rest}>
      {children}
    </Heading>
  );
}
