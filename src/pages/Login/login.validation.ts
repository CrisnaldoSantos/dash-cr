import * as yup from 'yup';

export const signInFormSchema = yup.object().shape({
  email: yup
    .string()
    .required('O campo E-mail é obrigatório!')
    .email('O campo E-mail não é um valor válido!'),
  password: yup.string().required('O campo Senha é obrigatório!'),
});
