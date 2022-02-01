import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  IconButton,
  Input as ChakraInput,
  InputGroup,
  InputProps as ChakraInputProps,
  InputRightElement,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction, useState } from 'react';
import { FieldError } from 'react-hook-form';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import InputMask from 'react-input-mask';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
  passwordInput?: boolean;
  maskred?: boolean;
  disabled?: boolean;
  mask?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    label,
    error = undefined,
    passwordInput = false,
    maskred = false,
    disabled = false,
    mask = '',
    ...rest
  }: InputProps,
  ref
) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  let props = { ...rest };

  if (passwordInput) {
    props = { ...rest, type: show ? 'text' : 'password' };
  }
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <InputGroup
        display="flex"
        alignItems="center"
        justifyContent="center"
        size="lg"
      >
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
          {...props}
        />
        {!!passwordInput && (
          <InputRightElement display="flex" bgColor="transparent">
            <IconButton
              aria-label="visible-password"
              bgColor="transparent"
              onClick={handleClick}
              icon={show ? <Icon as={RiEyeLine} /> : <Icon as={RiEyeOffLine} />}
            />
          </InputRightElement>
        )}
      </InputGroup>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
