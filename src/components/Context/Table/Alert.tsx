import {
  AlertIcon,
  Alert as AlertChakra,
  AlertProps as AlertChakraProps,
} from '@chakra-ui/react';

interface AlertProps extends AlertChakraProps {
  text: string;
  status: 'error' | 'success' | 'warning' | 'info';
}
export function Alert({ text, status, ...rest }: AlertProps) {
  return (
    <AlertChakra status={status} {...rest} mt="4" borderRadius="8">
      <AlertIcon />
      {text}
    </AlertChakra>
  );
}
