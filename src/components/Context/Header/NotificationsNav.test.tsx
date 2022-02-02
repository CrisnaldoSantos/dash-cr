import { render, screen } from '@testing-library/react';
import { NotificationsNav } from './NotificationsNav';

describe('NotificationsNav Component', () => {
  test('deve exibir dois ícones de notificação', () => {
    render(<NotificationsNav />);

    const icon1 = screen.getByTitle('notify');
    const icon2 = screen.getByTitle('user-notify');
    expect(icon1).toBeInTheDocument();
    expect(icon2).toBeInTheDocument();
  });
});
