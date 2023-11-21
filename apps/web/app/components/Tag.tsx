import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'span'>;

export default forwardRef<HTMLLIElement, Props>(function Tag(
  { className = '', children, ...rest },
  ref
) {
  return (
    <li className={`inline-block ${className}`} {...rest} ref={ref}>
      {children}
    </li>
  );
});
