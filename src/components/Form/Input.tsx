import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';
import InputMask from 'react-input-mask';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
  maskred?: boolean;
  disabled?: boolean;
  mask?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    label,
    error = undefined,
    maskred = false,
    disabled = false,
    mask = '',
    ...rest
  }: InputProps,
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        name={name}
        id={name}
        as={maskred ? InputMask : 'input'}
        mask={mask}
        focusBorderColor="blue.500"
        bgColor="gray.50"
        variant={disabled ? 'outline' : 'filled'}
        size="lg"
        isDisabled={disabled}
        _hover={{
          bgColor: 'gray.100',
        }}
        _disabled={{
          color: 'blue.650',
          bgColor: 'gray.50',
        }}
        ref={ref}
        {...rest}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
