import { render, screen } from '@testing-library/react';

import { Profile } from './Profile';

jest.mock('utils/dataStorage', () => {
  return {
    getUserData() {
      return {
        code: '1',
        email: 'usuario@user.com',
        fullname: 'usuario teste',
        role: 'ADMIN',
      };
    },
  };
});

describe('Profile Component', () => {
  it('deve exibir as informações obtidas do localStorage, o nome, o email e o nome presente na formação de iniciais do avatar', async () => {
    const fullname = 'usuario teste';
    const acronym = 'ut';
    const email = 'usuario@user.com';
    const showProfile = true;
    render(<Profile showProfileData={showProfile} />);

    const nameProfile = screen.getByText(fullname);
    const emailProfile = screen.getByText(email);
    const nameImgProfile = screen.getByRole('img', { name: fullname });
    const acronymImgProfile = screen.getByText(acronym);

    expect(nameProfile).toBeInTheDocument();
    expect(emailProfile).toBeInTheDocument();
    expect(nameImgProfile).toBeInTheDocument();
    expect(acronymImgProfile).toBeInTheDocument();
  });

  it('não deve exibir as informações do nome e email, porém o nome presente na formação de iniciais do avatar deverá', async () => {
    const fullname = 'usuario teste';
    const acronym = 'ut';
    const email = 'usuario@user.com';
    const showProfile = false;
    render(<Profile showProfileData={showProfile} />);

    const nameProfile = screen.queryByText(fullname);
    const emailProfile = screen.queryByText(email);
    const nameImgProfile = screen.getByRole('img', { name: fullname });
    const acronymImgProfile = screen.getByText(acronym);

    expect(nameProfile).not.toBeInTheDocument();
    expect(emailProfile).not.toBeInTheDocument();
    expect(nameImgProfile).toBeInTheDocument();
    expect(acronymImgProfile).toBeInTheDocument();
  });
});
