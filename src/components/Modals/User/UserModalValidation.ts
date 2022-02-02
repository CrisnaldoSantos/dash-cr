import * as yup from 'yup';

export const userModalValidationSchema = yup.object().shape({
  firstName: yup.string().required('O campo Nome é obrigatório!'),
  lastName: yup.string().required('O campo Sobrenome é obrigatório!'),
  email: yup
    .string()
    .required('O campo E-mail é obrigatório!')
    .email('O campo E-mail não é um valor válido!'),
  document: yup
    .string()
    .required('O campo CPF é obrigatório!')
    .matches(/^(\d{3}\.){2}\d{3}-\d{2}$/, 'O CPF informado deve ser válido'),
  password: yup.string().required('O campo Senha é obrigatório!'),
  password_confirmation: yup
    .string()
    .required('O campo Senha é obrigatório!')
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais!'),
  role: yup.string().required('O campo Perfil é obrigatório!'),
});

export const userModalEditValidationSchema = yup.object().shape({
  firstName: yup.string().required('O campo Nome é obrigatório!'),
  lastName: yup.string().required('O campo Sobrenome é obrigatório!'),
  email: yup
    .string()
    .required('O campo E-mail é obrigatório!')
    .email('O campo E-mail não é um valor válido!'),
  document: yup
    .string()
    .required('O campo CPF é obrigatório!')
    .matches(/^(\d{3}\.){2}\d{3}-\d{2}$/, 'O CPF informado deve ser válido'),
  role: yup.string().required('O campo Perfil é obrigatório!'),
});

export const defaultCreateValues = {
  firstName: '',
  lastName: '',
  email: '',
  document: '',
  password: '',
  password_confirmation: '',
  role: '',
};
