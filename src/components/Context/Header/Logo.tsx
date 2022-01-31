import { Text } from '@chakra-ui/react';

export function Logo() {
  return (
    <Text
      fontSize={['2xl', '4xl']}
      letterSpacing="tight"
      fontWeight="bold"
      w="64"
    >
      DashCr
      <Text as="span" ml="1" color="blue.500" fontSize={['2xl', '3xl']}>
        .
      </Text>
    </Text>
  );
}
