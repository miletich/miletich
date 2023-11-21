import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'h2'>;

export default forwardRef<HTMLHeadingElement, Props>(function H2(
  { className = '', children, ...rest },
  ref
) {
  return (
    <h2 ref={ref} className={`text-xl mb-6 ${className}`} {...rest}>
      {children}
    </h2>
  );
});
