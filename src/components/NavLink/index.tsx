import { cloneElement, ReactElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface LinkProps {
  children: ReactElement;
  destination: string;
}

export function NavLink({ children, destination }: LinkProps): JSX.Element {
  const { asPath } = useRouter();

  const isActive = asPath === destination;

  return (
    <Link href={destination}>
      {cloneElement(children, {
        className: isActive ? 'active' : '',
      })}
    </Link>
  );
}
