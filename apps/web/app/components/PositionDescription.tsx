import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'ul'>;

export default forwardRef<HTMLUListElement, Props>(function PositionDescription(
  { className = '', children, ...rest },
  ref
) {
  return (
    <ul ref={ref} className={` ${className}`} {...rest}>
      {children}
    </ul>
  );
});
