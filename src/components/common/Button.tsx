import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './common.css';

type ButtonVariant = 'primary' | 'gold' | 'outline' | 'inverse';

interface BaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

type RouterLinkProps = BaseProps & {
  to: string;
};

type ExternalLinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: undefined;
    href?: undefined;
  };

export type ButtonProps = RouterLinkProps | ExternalLinkProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const variant = props.variant ?? 'primary';
  const classes = `ui-btn ui-btn--${variant}${props.className ? ` ${props.className}` : ''}`;

  if ('to' in props && props.to !== undefined) {
    return (
      <Link to={props.to} className={classes}>
        {props.children}
      </Link>
    );
  }

  if ('href' in props && props.href !== undefined) {
    const { variant: _v, className: _c, children, ...rest } = props;
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { variant: _v, className: _c, children, type = 'button', ...rest } = props;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
