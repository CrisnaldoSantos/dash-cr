import { Link, LinkProps, useLocation } from 'react-router-dom';

import { cloneElement, ReactElement } from 'react';

interface ActiveLinksProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}
export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinksProps) {
  const { pathname } = useLocation();
  let isActive = false;

  if (pathname === rest.to) {
    isActive = true;
  }

  if (!shouldMatchExactHref && pathname.startsWith(String(rest.to))) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'blue.500' : 'gray.500',
      })}
    </Link>
  );
}
