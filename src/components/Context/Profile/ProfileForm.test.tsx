import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ProfileForm } from './ProfileForm';

const mockStore = configureStore();
let store;

afterEach(() => {
  jest.clearAllMocks();
});

describe('ProfileForm Component', () => {
  it('deve renderizar corretamente o formulário', () => {
    const initialState = {
      auth: {
        user: {},
      },
    };
    store = mockStore(initialState);

    const nomeInput = 'Nome';
    const sobrenomeInput = 'Sobrenome';
    const emailInput = 'Email';
    const cpfInput = 'CPF';
    const roleInput = 'Perfil';
    const idInput = 'ID';

    render(
      <Provider store={store}>
        <ProfileForm />
      </Provider>
    );
    // screen.logTestingPlaygroundURL();

    const avatarProfileForm = screen.getByRole('img', {
      name: /undefined undefined/i,
    });

    const nomeProfileForm = screen.getByRole('textbox', {
      name: nomeInput,
    });

    const sobrenomeProfileForm = screen.getByRole('textbox', {
      name: sobrenomeInput,
    });

    const emailProfileForm = screen.getByRole('textbox', {
      name: emailInput,
    });

    const cpfProfileForm = screen.getByRole('textbox', {
      name: cpfInput,
    });

    const roleProfileForm = screen.getByRole('textbox', {
      name: roleInput,
    });

    const idProfileForm = screen.getByRole('textbox', {
      name: idInput,
    });

    expect(avatarProfileForm).toBeInTheDocument();
    expect(nomeProfileForm).toBeInTheDocument();
    expect(sobrenomeProfileForm).toBeInTheDocument();
    expect(emailProfileForm).toBeInTheDocument();
    expect(cpfProfileForm).toBeInTheDocument();
    expect(roleProfileForm).toBeInTheDocument();
    expect(idProfileForm).toBeInTheDocument();
  });

  it('deve renderizar corretamente o formulário recuperando dados de User do Redux', () => {
    const initialState = {
      auth: {
        user: {
          id: 1,
          firstName: 'Usuário',
          lastName: 'Teste',
          email: 'usuario@user.com',
          document: '123.123.123-12',
          password: '',
          role: 'ADMIN',
        },
      },
    };
    store = mockStore(initialState);
    const avatarInput = 'UT';
    const nomeInput = 'Nome';
    const sobrenomeInput = 'Sobrenome';
    const emailInput = 'Email';
    const cpfInput = 'CPF';
    const roleInput = 'Perfil';
    const idInput = 'ID';

    render(
      <Provider store={store}>
        <ProfileForm />
      </Provider>
    );

    const avatarProfileForm = screen.getByText(avatarInput);
    const nomeProfileForm = screen.getByText(nomeInput);
    const sobrenomeProfileForm = screen.getByText(sobrenomeInput);
    const emailProfileForm = screen.getByText(emailInput);
    const cpfProfileForm = screen.getByText(cpfInput);
    const roleProfileForm = screen.getByText(roleInput);
    const idProfileForm = screen.getByText(idInput);

    expect(avatarProfileForm).toBeInTheDocument();
    expect(nomeProfileForm).toBeInTheDocument();
    expect(sobrenomeProfileForm).toBeInTheDocument();
    expect(emailProfileForm).toBeInTheDocument();
    expect(cpfProfileForm).toBeInTheDocument();
    expect(roleProfileForm).toBeInTheDocument();
    expect(idProfileForm).toBeInTheDocument();
  });
});
