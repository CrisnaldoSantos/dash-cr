import {
  Modal as ChakraModal,
  ModalProps as ChakraModalProps,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Heading,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

interface ModalProps extends ChakraModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  onSubmit: any;
  labelSubmitButton?: string;
  labelCancelButton?: string;
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  onSubmit,
  labelSubmitButton = 'Salvar',
  labelCancelButton = 'Cancelar',
  ...rest
}: ModalProps) {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} {...rest}>
      <ModalOverlay />
      <ModalContent as="form" p="4" onSubmit={onSubmit}>
        <ModalHeader>
          <Heading size="md" fontWeight="Bold">
            {title}
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button bgColor="gray.100" mr={3} onClick={onClose}>
            {labelCancelButton}
          </Button>
          <Button type="submit" colorScheme="blue">
            {labelSubmitButton}
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
}
