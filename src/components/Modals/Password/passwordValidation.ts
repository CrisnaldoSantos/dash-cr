import * as yup from 'yup';

export const passwordValidationSchema = yup.object().shape({
  password: yup.string().required('O campo Senha é obrigatório!'),
  new_password: yup.string().required('O campo Nova Senha é obrigatório!'),
  new_password_confirmation: yup
    .string()
    .required('O campo Confirmação da Nova Senha é obrigatório!')
    .oneOf(
      [null, yup.ref('new_password')],
      'O campo precisa corresponder a Nova Senha!'
    ),
});

export const defaultPasswordValues = {
  password: '',
  new_password: '',
  new_password_confirmation: '',
};
