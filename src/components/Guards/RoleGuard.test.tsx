import { render, screen } from '@testing-library/react';
import { getUserData } from 'utils/dataStorage';
import { RoleGuards } from './RoleGuard';

jest.mock('utils/dataStorage');

const mockGetUserData = getUserData as jest.MockedFunction<typeof getUserData>;

afterEach(() => {
  jest.clearAllMocks();
});

describe('RoleGuards Component', () => {
  it('deve exibir as informações do children se o usuário estiver com role ADMIN no storage', () => {
    mockGetUserData.mockImplementation(() => {
      return {
        code: '1',
        email: 'usuario@user.com',
        fullname: 'usuario teste',
        role: 'ADMIN',
      };
    });
    const children = 'teste';
    render(<RoleGuards>{children}</RoleGuards>);

    const childrenRoleGuards = screen.getByText(children);

    expect(childrenRoleGuards).toBeInTheDocument();
  });

  it('não deve exibir as informações do children se o usuário não estiver com role ADMIN no storage', () => {
    mockGetUserData.mockImplementation(() => {
      return {
        code: '1',
        email: 'usuario@user.com',
        fullname: 'usuario teste',
        role: 'USER',
      };
    });
    const children = 'teste';
    render(
      <RoleGuards>
        <p>{children}</p>
      </RoleGuards>
    );

    const childrenRoleGuards = screen.queryByText(children);
    expect(childrenRoleGuards).not.toBeInTheDocument();
  });

  it('não deve exibir as informações do children se o usuário não houver dados no localStorage', () => {
    mockGetUserData.mockImplementation(() => {
      return {
        code: null,
        email: null,
        fullname: null,
        role: null,
      };
    });
    const children = 'teste';
    render(
      <RoleGuards>
        <p>{children}</p>
      </RoleGuards>
    );

    const childrenRoleGuards = screen.queryByText(children);
    expect(childrenRoleGuards).not.toBeInTheDocument();
  });
});
