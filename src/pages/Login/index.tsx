import { Button, Flex, Stack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from 'components/Form/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { Logo } from 'components/Context/Header/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { login } from 'store/auth/auth.ducks';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInFormSchema } from './login.validation';

type SignInFormData = {
  email: string;
  password: string;
};

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state: RootState) => state.loading);
  const { loginSuccess } = useSelector((state: RootState) => state.auth);
  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    dispatch(login(data));
  };

  useEffect(() => {
    if (loginSuccess) {
      navigate('/dashboard');
    }
  }, [loginSuccess, navigate]);

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={400}
        bg="white"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
        boxShadow="xl"
      >
        <Stack spacing="4">
          <Logo />
          <Input
            type="email"
            label="E-mail"
            error={errors.email}
            {...register('email')}
          />
          <Input
            type="password"
            label="Senha"
            passwordInput
            {...register('password')}
            error={errors.password}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="blue"
          size="lg"
          isLoading={loading === 1}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
