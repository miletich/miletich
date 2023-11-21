import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'li'>;

export default forwardRef<HTMLLIElement, Props>(function Li(
  { className = '', children, ...rest },
  ref
) {
  return (
    <li ref={ref} className={`text-base ${className}`} {...rest}>
      {children}
    </li>
  );
});