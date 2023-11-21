import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'a'> & {
  href: string;
  title: string;
};

export default forwardRef<HTMLAnchorElement, Props>(function A(
  { className = '', children, href, title, ...rest },
  ref
) {
  return (
    <a
      ref={ref}
      href={href}
      title={title}
      className={`hover:text-zinc-50 ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
});
