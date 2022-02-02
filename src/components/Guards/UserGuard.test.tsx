import { render, screen } from '@testing-library/react';
import { getUserData } from 'utils/dataStorage';
import { UserGuards } from './UserGuard';

jest.mock('utils/dataStorage');

const mockGetUserData = getUserData as jest.MockedFunction<typeof getUserData>;

afterEach(() => {
  jest.clearAllMocks();
});

describe('UserGuards Component', () => {
  it('não deve exibir as informações do children se o usuário passado por prop for o mesmo presente no storage', () => {
    mockGetUserData.mockImplementation(() => {
      return {
        code: '1',
        email: 'usuario@user.com',
        fullname: 'usuario teste',
        role: 'ADMIN',
      };
    });
    const user = 1;
    const children = 'teste';

    render(<UserGuards userId={user}>{children}</UserGuards>);

    const childrenRoleGuards = screen.queryByText(children);

    expect(childrenRoleGuards).not.toBeInTheDocument();
  });

  it('deve exibir as informações do children se o usuário passado por prop não for o mesmo presente no storage', () => {
    mockGetUserData.mockImplementation(() => {
      return {
        code: '1',
        email: 'usuario@user.com',
        fullname: 'usuario teste',
        role: 'ADMIN',
      };
    });
    const user = 2;
    const children = 'teste';

    render(<UserGuards userId={user}>{children}</UserGuards>);

    const childrenRoleGuards = screen.getByText(children);

    expect(childrenRoleGuards).toBeInTheDocument();
  });

  it('deve exibir as informações do children caso não haja dados no storage', () => {
    mockGetUserData.mockImplementation(() => {
      return {
        code: null,
        email: null,
        fullname: null,
        role: null,
      };
    });
    const user = 2;
    const children = 'teste';

    render(<UserGuards userId={user}>{children}</UserGuards>);

    const childrenRoleGuards = screen.getByText(children);

    expect(childrenRoleGuards).toBeInTheDocument();
  });
});
