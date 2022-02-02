import { Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface CounterRegisterProps {
  label: string;
  counter: number;
}
export function CounterRegister({ counter, label }: CounterRegisterProps) {
  const [count, setCount] = useState(0);
  const total = 1000;

  useEffect(() => {
    let start = 0;
    const increment = total / counter;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === counter) clearInterval(timer);
    }, increment);
  }, [counter]);

  return (
    <Box p="8" bg="white" borderRadius={8} pb="4" boxShadow="xl">
      <Text fontSize="lg" mb="4">
        {label}
      </Text>
      <Text fontSize="100" h="90%" fontWeight="bold" pl="6">
        {count}
      </Text>
    </Box>
  );
}
