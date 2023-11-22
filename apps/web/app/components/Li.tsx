import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'li'>;

export default forwardRef<HTMLLIElement, Props>(function Li(
  { className = '', children, ...rest },
  ref
) {
  return (
    <li
      ref={ref}
      className={`text-base mb-2 xl:text-zinc-500 ${className}`}
      {...rest}
    >
      {children}
    </li>
  );
});
