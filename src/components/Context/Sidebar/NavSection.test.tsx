import { render, screen } from '@testing-library/react';
import { NavSection } from './NavSection';

describe('NavSection Component', () => {
  it('deve renderizar corretamente o NavSection', () => {
    const title = 'NavTestingTitle';
    const children = 'ChildrenText';
    render(
      <NavSection title={title}>
        <p>{children}</p>
      </NavSection>
    );

    const titleNavSection = screen.getByText(title);
    const childrenNavSection = screen.getByText(children);

    expect(titleNavSection).toBeInTheDocument();
    expect(childrenNavSection).toBeInTheDocument();
  });
});
